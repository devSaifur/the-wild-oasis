import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { login } from '../../services/apiAuth'

function useLogin() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const { mutate, isLoading } = useMutation({
    mutationFn: ({ email, password }) => login({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(['user'], user.user)
      navigate('/dashboard', { replace: true })
    },
    onError: (err) => {
      console.log('ERROR', err)
      toast.error('Provided email or password are incorrect')
    },
  })

  return { mutate, isLoading }
}

export { useLogin }
