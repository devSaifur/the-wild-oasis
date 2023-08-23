import { useQuery } from '@tanstack/react-query'
import { getSettings } from '../../services/apiSettings'

function useSettings() {
  const { settings, error, isLoading } = useQuery({
    queryKey: ['settings'],
    queryFn: getSettings,
  })

  return { settings, error, isLoading }
}

export { useSettings }
