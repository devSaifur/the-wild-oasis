import * as React from 'react'
import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '../lib/utils'

const rowVariants = cva('flex', {
  variants: {
    variant: {
      horizontal: 'items-center justify-between',
      vertical: 'flex-col gap-[1.6rem]',
    },
  },
  defaultVariants: {
    variant: 'horizontal',
  },
})

export const Row = ({
  children,
  variant,
  className,
}: React.ComponentProps<'div'> & VariantProps<typeof rowVariants>) => {
  return (
    <div className={cn(rowVariants({ variant, className }))}>{children}</div>
  )
}
