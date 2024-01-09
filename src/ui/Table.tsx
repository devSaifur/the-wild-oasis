import { createContext } from 'react'
import Empty from './Empty'

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

const Body = ({
  data,
  render,
}: {
  data: string[]
  render: (data: string) => JSX.Element
}) => {
  if (!data.length) return <Empty>No data to show at the moment</Empty>

  return <section className="mx-0 my-[0.4rem]">{data.map(render)}</section>
}

export { Body }

export default Table
