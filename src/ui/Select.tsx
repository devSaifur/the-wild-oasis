interface Option {
  value: string
  label: string
}

export interface SelectProps {
  options: Option[]
  type: 'white'
}

const Select = ({
  options,
  ...props
}: React.ComponentProps<'select'> & SelectProps) => {
  return (
    <select {...props}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default Select
