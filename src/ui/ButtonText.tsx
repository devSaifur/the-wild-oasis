import { ComponentProps } from 'react'
import { cn } from '../lib/utils'

const ButtonText = ({
  children,
  className,
  ...props
}: ComponentProps<'button'>) => {
  return (
    <button
      className={cn(
        'background-none rounded-sm border-none bg-none text-center font-medium text-indigo-600 transition-all delay-300 hover:text-indigo-700 active:text-indigo-700',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default ButtonText
