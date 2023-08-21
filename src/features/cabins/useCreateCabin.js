import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { createEditCabin } from '../../services/apiCabins'

function useCreateCabin() {
  const queryClient = useQueryClient()

  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: createEditCabin,

    onSuccess: () => {
      toast.success('New cabin has been successfully created')
      queryClient.invalidateQueries({ queryKey: ['cabins'] })
    },

    onError: (err) => toast.error(err.message),
  })

  return { createCabin, isCreating }
}

export { useCreateCabin }
