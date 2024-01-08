import * as React from 'react'
import { cn } from '../lib/utils'

const Input = ({ className, ...props }: React.ComponentProps<'input'>) => {
  return (
    <input
      className={cn(
        'rounded-sm border border-solid border-gray-300 px-[1.2rem] py-[0.8rem] text-gray-0 dark:border-gray-600',
        className
      )}
      {...props}
    />
  )
}

export default Input
