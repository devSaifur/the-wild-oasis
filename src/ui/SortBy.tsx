import { ChangeEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import Select, { SelectProps } from './Select'

const SortBy = ({ options }: SelectProps) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const sortBy = searchParams.get('sortBy') || ''

  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    searchParams.set('sortBy', e.target.value)
    setSearchParams(searchParams)
  }

  return (
    <Select
      options={options}
      type="white"
      value={sortBy}
      onChange={handleChange}
    />
  )
}

export default SortBy
