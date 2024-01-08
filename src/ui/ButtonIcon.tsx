import { ComponentProps } from 'react'
import { cn } from '../lib/utils'

const ButtonIcon = ({
  children,
  className,
  ...props
}: ComponentProps<'button'>) => {
  return (
    <button
      className={cn(
        'rounded-sm border-none bg-none p-[0.6rem] transition-all delay-200 hover:bg-gray-100 dark:hover:bg-gray-800',
        className
      )}
      {...props}
    >
      <span className="h-[2.2rem] w-[2.2rem] text-indigo-600">{children}</span>
    </button>
  )
}

export default ButtonIcon
