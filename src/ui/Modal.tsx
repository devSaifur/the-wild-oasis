import React, { cloneElement, createContext, useContext, useState } from 'react'
import { useOutsideClick } from '../hooks/useOutsideClick'
import { createPortal } from 'react-dom'
import { HiXMark } from 'react-icons/hi2'

type ModalContextProps = {
  openName: string
  open: (name: string) => void
  close: () => void
}

const ModalContext = createContext<ModalContextProps>({
  openName: '',
  open: () => {},
  close: () => {},
})

const Modal = ({ children }: { children: React.ReactNode }) => {
  const [openName, setOpenName] = useState('')

  const close = () => setOpenName('')
  const open = setOpenName

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  )
}

interface OpenProps {
  opens: string
  children: React.ReactElement
}

const Open = ({ children, opens: opensWindowName }: OpenProps) => {
  const { open } = useContext(ModalContext)

  return cloneElement(children, { onClick: () => open(opensWindowName) })
}

interface WindowProps {
  name: string
  children: React.ReactElement
}

const Window = React.forwardRef<HTMLDivElement, WindowProps>(
  ({ name, children }) => {
    const { openName, close } = useContext(ModalContext)
    const ref = useOutsideClick(close)

    if (name !== openName) return null

    return createPortal(
      <div>
        <div ref={ref}>
          <button onClick={close}>
            <HiXMark />
          </button>

          <div>{cloneElement(children, { onCloseModal: close })}</div>
        </div>
      </div>,
      document.body
    )
  }
)

export default Modal
export { Open, Window }
