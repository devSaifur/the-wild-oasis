import { ComponentProps } from 'react'
import { cn } from '../lib/utils'

const Flag = ({ className, ...props }: ComponentProps<'img'>) => {
  return (
    <img
      className={cn(
        'max-w-8 rounded border border-solid border-gray-100 dark:border-gray-800',
        className
      )}
      {...props}
    />
  )
}

export default Flag
