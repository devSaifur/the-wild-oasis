import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { HiOutlineUser } from 'react-icons/hi2'

import ButtonIcon from './ButtonIcon'
import Logout from '../features/authentication/Logout'
import DarkModeToggle from './DarkModeToggle'

const StyledMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`

function HeaderMenu() {
  const navigate = useNavigate()

  return (
    <StyledMenu>
      <li>
        <ButtonIcon onClick={() => navigate('/account')}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <DarkModeToggle />
      </li>
      <li>
        <Logout />
      </li>
    </StyledMenu>
  )
}

export default HeaderMenu
