import { useNavigate } from 'react-router-dom'
import { HiOutlineUser } from 'react-icons/hi2'

import ButtonIcon from './ButtonIcon'
import DarkModeToggle from './DarkModeToggle'

const HeaderMenu = () => {
  const navigate = useNavigate()

  return (
    <ul className="flex gap-[0.4rem]">
      <li>
        <ButtonIcon onClick={() => navigate('/account')}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <DarkModeToggle />
      </li>
      <li>logout</li>
    </ul>
  )
}

export default HeaderMenu
