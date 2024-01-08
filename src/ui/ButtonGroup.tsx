import { ComponentProps } from 'react'

const ButtonGroup = ({ children, ...props }: ComponentProps<'button'>) => {
  return (
    <button className="flex justify-end gap-[1.2rem]" {...props}>
      {children}
    </button>
  )
}

export default ButtonGroup
