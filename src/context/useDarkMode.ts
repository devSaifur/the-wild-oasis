import { useContext } from 'react'
import { DarkModeContext } from './DarkModeContext'

function useDarkMode() {
  const value = useContext(DarkModeContext)

  if (value === undefined)
    throw new Error('DarkModeContext was use outside of its provider')

  return value
}

export { useDarkMode }
