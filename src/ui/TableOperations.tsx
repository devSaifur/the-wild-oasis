import * as React from 'react'

interface TableOperationsProps extends React.HTMLAttributes<HTMLDivElement> {}

const TableOperations = React.forwardRef<HTMLDivElement, TableOperationsProps>(
  ({ children }) => {
    return <div className="flex items-center gap-[1.6rem]">{children}</div>
  }
)
export default TableOperations
