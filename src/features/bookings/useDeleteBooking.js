import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { deleteBooking } from '../../services/apiBookings'

function useDeleteBooking() {
  const queryClient = useQueryClient()

  const { mutate, isLoading: isDeleting } = useMutation({
    mutationFn: (bookingId) => deleteBooking(bookingId),

    onSuccess: () => {
      toast.success(`Booking successfully deleted`)
      queryClient.invalidateQueries({ queryKey: ['bookings'] })
    },

    onError: () => toast.error('There was an error while deleting booking'),
  })

  return { mutate, isDeleting }
}

export { useDeleteBooking }
