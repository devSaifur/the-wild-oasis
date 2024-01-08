import * as React from 'react'
import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '../lib/utils'

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean
}

const buttonVariants = cva('rounded-sm border-none shadow-sm', {
  variants: {
    variant: {
      primary: 'bg-indigo-600 text-indigo-50 hover:bg-indigo-700',
      secondary:
        'border border-solid border-gray-200 bg-gray-0 text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-900',
      danger: 'bg-red-700 text-red-100 hover:bg-red-800',
    },
    size: {
      sm: 'px-[0.8rem] py-[0.4rem] text-center text-xs font-semibold uppercase',
      medium: 'px-[1.6rem] py-[1.2rem] text-sm font-medium',
      large: 'px-[2.4rem] py-[1.2rem] text-base font-medium',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
})

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, children, variant, size, disabled, isLoading, ...props },
    ref
  ) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        disabled={isLoading || disabled}
        {...props}
        ref={ref}
      >
        {children}
      </button>
    )
  }
)

export default Button
