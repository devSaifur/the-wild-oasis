import { useQuery } from '@tanstack/react-query'
import { getSettings } from '../../services/apiSettings'

function useSettings() {
  const {
    data: settings,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['settings'],
    queryFn: getSettings,
  })

  return { isLoading, error, settings }
}

export { useSettings }
