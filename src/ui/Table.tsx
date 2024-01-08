import { createContext } from 'react'

const TableContext = createContext({
  columns: 0,
})

const Table = ({
  children,
  columns,
}: {
  children: React.ReactNode
  columns: number
}) => {
  return (
    <TableContext.Provider value={{ columns }}>
      {children}
    </TableContext.Provider>
  )
}

export default Table
