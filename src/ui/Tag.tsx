import { cn } from '../lib/utils'

interface TagProps {
  color700: string
  bg100: string
}

const Tag = ({
  color700,
  bg100,
  children,
  ...props
}: React.ComponentProps<'span'> & TagProps) => {
  return (
    <span
      className={cn(
        'w-fit rounded-full px-[1.2rem] py-[0.4rem] text-[11px] font-semibold uppercase',
        color700,
        bg100
      )}
      {...props}
    >
      {children}
    </span>
  )
}

export default Tag
