import { useDarkMode } from '../context/useDarkMode'

const Logo = () => {
  const { isDarkMode } = useDarkMode()
  const src = isDarkMode ? '/logo-dark.png' : '/logo-light.png'

  return (
    <div className="text-center">
      <img src={src} alt="Logo" className="h-[9.6rem] w-auto" />
    </div>
  )
}

export default Logo
