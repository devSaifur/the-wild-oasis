interface EmptyProps {
  resource?: string
  children?: React.ReactNode
}

const Empty = ({ resource, children }: EmptyProps) => {
  const emptyWithChildren = <p>{children}</p>
  const emptyWithoutChildren = <p>No {resource} could be found.</p>

  return children ? emptyWithChildren : emptyWithoutChildren
}

export default Empty
