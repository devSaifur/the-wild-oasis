import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'
import { getBookings } from '../../services/apiBookings'
import { PAGE_SIZE } from '../../utils/constants'

function useBookings() {
  const queryClient = useQueryClient()
  const [searchPrams] = useSearchParams()

  //Filter
  const filterValue = searchPrams.get('status')
  const filter =
    !filterValue || filterValue === 'all'
      ? null
      : { field: 'status', value: filterValue }

  //Sort
  const sortByRow = searchPrams.get('sortBy') || 'startDate-desc'
  const [field, direction] = sortByRow.split('-')
  const sortBy = { field, direction }

  //Pagination
  const page = !searchPrams.get('page') ? 1 : Number(searchPrams.get('page'))

  //Query
  const {
    isLoading,
    error,
    data: { data: bookings, count } = {},
  } = useQuery({
    queryKey: ['bookings', filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  })

  //Pre-fetching
  const pageCount = Math.ceil(count / PAGE_SIZE)

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ['bookings', filter, sortBy, page + 1],
      queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
    })

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ['bookings', filter, sortBy, page - 1],
      queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
    })

  return { isLoading, error, bookings, count }
}

export { useBookings }
