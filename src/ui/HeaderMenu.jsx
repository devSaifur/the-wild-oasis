import { styled } from 'styled-components'
import ButtonIcon from './ButtonIcon'
import Logout from '../features/authentication/Logout'
import { useNavigate } from 'react-router-dom'
import { HiOutlineUser } from 'react-icons/hi2'

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
        <Logout />
      </li>
    </StyledMenu>
  )
}

export default HeaderMenu
