import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { signup } from '../../services/apiAuth'

function useSignup() {
  const { mutate, isLoading } = useMutation({
    mutationFn: signup,
    onSuccess: () => {
      toast.success(
        "Account successfully created! Please verify the new account from the user's email address."
      )
    },
  })

  return { mutate, isLoading }
}

export { useSignup }
