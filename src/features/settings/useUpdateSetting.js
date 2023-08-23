import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { updateSetting } from '../../services/apiSettings'

function useUpdateSetting() {
  const queryClient = useQueryClient()

  const { mutate, isLoading } = useMutation({
    mutationFn: updateSetting,

    onSuccess: () => {
      toast.success('Settings has been successfully updated')
      queryClient.invalidateQueries({ queryKey: ['settings'] })
    },

    onError: (err) => toast.error(err.message),
  })

  return { mutate, isLoading }
}

export { useUpdateSetting }
