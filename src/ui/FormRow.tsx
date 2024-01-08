import * as React from 'react'

interface FormRowProps {
  error: string
  label: React.ReactNode
  children: React.ReactElement
}

const FormRow = ({ children, error, label }: FormRowProps) => {
  return (
    <div className="grid grid-cols-[24rem_1fr_1.2fr] items-center gap-[2.4rem]">
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

export default FormRow
