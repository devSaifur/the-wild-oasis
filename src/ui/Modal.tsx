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
      <div className="bg-backdrop-primary backdrop-filter-[blur(4px)] fixed left-0 top-0 z-50 h-screen w-full bg-opacity-10 transition-all delay-500 dark:bg-opacity-30">
        <div
          ref={ref}
          className="fixed inset-x-0 top-10 mx-auto rounded-lg bg-gray-0 px-16 py-[3.2rem] shadow-xl transition-all delay-500 sm:w-3/4 md:w-2/4"
        >
          <button
            onClick={close}
            className="absolute right-[1.9rem] top-[1.2rem] translate-x-[0.8rem] rounded-sm border-none bg-none p-[0.4rem] transition-all delay-200 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <span className="h-[2.4rem] w-[2.4rem] fill-gray-500 stroke-gray-500 text-gray-500 dark:fill-gray-400 dark:stroke-gray-400 dark:text-gray-400">
              <HiXMark />
            </span>
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
