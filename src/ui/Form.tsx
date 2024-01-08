import * as React from 'react'
import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '../lib/utils'

interface FormProps
  extends React.FormHTMLAttributes<HTMLFormElement>,
    VariantProps<typeof formVariants> {}

const formVariants = cva('text-sm overflow-hidden', {
  variants: {
    variant: {
      regular:
        'border border-solid border-gray-100 bg-gray-0 dark:border-gray-800',
      modal: 'w-[80rem]',
    },
  },
  defaultVariants: {
    variant: 'regular',
  },
})

const Form = React.forwardRef<HTMLFormElement, FormProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <form
        className={cn(formVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </form>
    )
  }
)

export default Form
