import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from 'react-icons/hi2'
import { formatCurrency } from '../../utils/helpers'
import Stat from './Stat'

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  const numBookings = bookings.length
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0)
  const checkIns = confirmedStays.length

  // num checked in nights / all available nights (num days * num cabins)
  const calculateOccupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount)

  const occupation = Math.round(calculateOccupation * 100) + '%'

  return (
    <>
      <Stat
        title='Bookings'
        value={numBookings}
        color='blue'
        icon={<HiOutlineBriefcase />}
      />
      <Stat
        title='Sales'
        value={formatCurrency(sales)}
        color='green'
        icon={<HiOutlineBanknotes />}
      />
      <Stat
        title='Check ins'
        value={checkIns}
        color='indigo'
        icon={<HiOutlineCalendarDays />}
      />
      <Stat
        title='Occupancy rate'
        value={occupation}
        color='yellow'
        icon={<HiOutlineChartBar />}
      />
    </>
  )
}

export default Stats
