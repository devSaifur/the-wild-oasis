import React, { useState, useContext, createContext } from 'react'
import { createPortal } from 'react-dom'
import { HiEllipsisVertical } from 'react-icons/hi2'
import { useOutsideClick } from '../hooks/useOutsideClick'

type MenusContextProps = {
  openId: string
  close: () => void
  open: (id: string) => void
  position: { x: number; y: number }
  setPosition: (position: { x: number; y: number }) => void
}

const MenusContext = createContext<MenusContextProps>({
  openId: '',
  close: () => {},
  open: () => {},
  position: { x: 0, y: 0 },
  setPosition: () => {},
})

const Menus = ({ children }: { children: React.ReactNode }) => {
  const [openId, setOpenId] = useState('')
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const close = () => setOpenId('')
  const open = setOpenId

  return (
    <MenusContext.Provider
      value={{ openId, close, open, position, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  )
}

const Menu = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex items-center justify-end">{children}</div>
}

interface ToggleProps {
  id: string
}

const Toggle = ({
  id,
  ...props
}: React.ComponentProps<'button'> & ToggleProps) => {
  const { openId, open, close, setPosition } = useContext(MenusContext)

  function handleClick(e: React.MouseEvent) {
    e.stopPropagation()

    const target = e.target as Element
    const button = target.closest('button')
    if (!button) return
    const rect = button.getBoundingClientRect()
    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    })

    openId === '' || openId !== id ? open(id) : close()
  }

  return (
    <button
      onClick={handleClick}
      className="translate-x-[0.8rem] rounded-sm border-none bg-none p-[0.4rem] transition-all delay-200 hover:bg-gray-100 hover:dark:bg-gray-800"
      {...props}
    >
      <span className="h-[2.4rem] w-[2.4rem] text-gray-700 dark:text-gray-100">
        <HiEllipsisVertical />
      </span>
    </button>
  )
}

interface ListProps {
  id: string
  children: React.ReactNode
}

const List = ({ id, children }: ListProps) => {
  const { openId, position, close } = useContext(MenusContext)
  const ref = useOutsideClick(close, false)

  if (id !== openId) return null

  return createPortal(
    <ul
      className="fixed rounded-md bg-gray-0 shadow-md"
      style={{ top: `${position.y}px`, right: `${position.x}px` }}
      ref={ref}
    >
      {children}
    </ul>,
    document.body
  )
}

interface ButtonProps {
  icon: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  onClick,
  disabled,
}) => {
  const { close } = useContext(MenusContext)

  function handleClick() {
    onClick?.()
    close()
  }
  return (
    <li>
      <button
        onClick={handleClick}
        disabled={disabled}
        className="flex w-full items-center gap-[1.6rem] border-none bg-none px-[2.4rem] py-[1.2rem] text-left text-sm transition-all delay-200"
      >
        {icon}
        <span className="h-[1.6rem] w-[1.6rem] text-gray-400 transition-all delay-200 dark:text-gray-500">
          {children}
        </span>
      </button>
    </li>
  )
}

export default Menus
export { Menu, Toggle, List, Button }
