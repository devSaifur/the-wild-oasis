import { cn } from '../lib/utils'

interface HeadingProps {
  as: 'h1' | 'h2' | 'h3' | 'h4'
  children: React.ReactNode
  className?: string
}

const Heading = ({ as, children, className }: HeadingProps) => {
  switch (as) {
    case 'h1':
      return (
        <h1 className={cn('text-3xl font-semibold', className)}>{children}</h1>
      )
    case 'h2':
      return (
        <h2 className={cn('text-xl font-semibold', className)}>{children}</h2>
      )
    case 'h3':
      return (
        <h3 className={cn('text-xs font-medium', className)}>{children}</h3>
      )
    case 'h4':
      return (
        <h4 className={cn('text-center text-3xl font-semibold', className)}>
          {children}
        </h4>
      )
    default:
      return null
  }
}

export default Heading
