import { useNavigate } from 'react-router-dom'
import { HiArrowDownOnSquare, HiEye, HiTrash } from 'react-icons/hi2'
import { format, isToday } from 'date-fns'
import styled from 'styled-components'

import { formatCurrency } from '../../utils/helpers'
import { formatDistanceFromNow } from '../../utils/helpers'
import { useCheckout } from '../check-in-out/useCheckout'
import { useDeleteBooking } from './useDeleteBooking'
import Tag from '../../ui/Tag'
import Table from '../../ui/Table'
import Menus from '../../ui/Menus'
import Modal from '../../ui/Modal'
import ConfirmDelete from '../../ui/ConfirmDelete'

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: 'Sono';
`

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`

const Amount = styled.div`
  font-family: 'Sono';
  font-weight: 500;
`

function BookingRow({
  booking: {
    id: bookingId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    status,
    guests: { fullName: guestName, email },
    cabins: { name: cabinName },
  },
}) {
  const navigate = useNavigate()
  const { isCheckingOut, checkout } = useCheckout()
  const { mutate: deleteBooking, isDeleting } = useDeleteBooking()

  const statusToTagName = {
    unconfirmed: 'blue',
    'checked-in': 'green',
    'checked-out': 'silver',
  }

  return (
    <Table.Row>
      <Cabin>{cabinName}</Cabin>

      <Stacked>
        <span>{guestName}</span>
        <span>{email}</span>
      </Stacked>

      <Stacked>
        <span>
          {isToday(new Date(startDate))
            ? 'Today'
            : formatDistanceFromNow(startDate)}{' '}
          &rarr; {numNights} night stay
        </span>
        <span>
          {format(new Date(startDate), 'MMM dd yyyy')} &mdash;{' '}
          {format(new Date(endDate), 'MMM dd yyyy')}
        </span>
      </Stacked>

      <Tag type={statusToTagName[status]}>{status.replace('-', ' ')}</Tag>

      <Amount>{formatCurrency(totalPrice)}</Amount>

      <Modal>
        <Menus>
          <Menus.Toggle id={bookingId} />
          <Menus.List id={bookingId}>
            <Menus.Button
              onClick={() => navigate(`/bookings/${bookingId}`)}
              icon={<HiEye />}
            >
              See details
            </Menus.Button>

            {status === 'unconfirmed' && (
              <Menus.Button
                onClick={() => navigate(`/checkIn/${bookingId}`)}
                icon={<HiArrowDownOnSquare />}
                disabled={isCheckingOut}
              >
                Check in
              </Menus.Button>
            )}

            {status === 'checked-in' && (
              <Menus.Button
                onClick={() => checkout(bookingId)}
                icon={<HiArrowDownOnSquare />}
              >
                Check out
              </Menus.Button>
            )}

            <Modal.Open opens='delete'>
              <Menus.Button disabled={isDeleting} icon={<HiTrash />}>
                Delete Booking
              </Menus.Button>
            </Modal.Open>
          </Menus.List>
        </Menus>

        <Modal.Window name='delete'>
          <ConfirmDelete
            onConfirm={() => deleteBooking(bookingId)}
            resourceName='booking'
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  )
}

export default BookingRow
