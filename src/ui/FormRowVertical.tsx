interface FormRowVerticalProps {
  error: string
  label: React.ReactNode
  children: React.ReactElement
}

const FormRowVertical = ({ children, error, label }: FormRowVerticalProps) => {
  return (
    <div className="flex flex-col gap-[0.8rem] px-0 py-[1.2rem]">
      {label && (
        <label className="font-medium" htmlFor={children.props.id}>
          {label}
        </label>
      )}
      {children}
      {error && <span className="text-sm text-red-700">{error}</span>}
    </div>
  )
}

export default FormRowVertical
