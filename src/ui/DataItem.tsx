import { ReactNode } from 'react'

interface DataItemProps {
  children: ReactNode
  icon: ReactNode
  label: string
}

const DataItem = ({ children, icon, label }: DataItemProps) => {
  return (
    <div className="flex items-center gap-[1.6rem] px-0 py-[0.8rem]">
      <span className="flex h-8 w-8 items-center gap-[0.8rem] font-medium text-indigo-600">
        {icon}
        <span>{label}</span>
      </span>
      {children}
    </div>
  )
}

export default DataItem
