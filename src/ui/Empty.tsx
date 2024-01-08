interface EmptyProps {
  resource: string
}

const Empty = ({ resource }: EmptyProps) => {
  return <p>No {resource} could be found.</p>
}

export default Empty
