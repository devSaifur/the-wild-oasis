import * as React from 'react'
import { cn } from '../lib/utils'

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'h-32 w-full border border-solid border-gray-300 bg-gray-0 px-[1.2rem] py-[0.8rem] shadow-sm dark:border-gray-600',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

export default Textarea
