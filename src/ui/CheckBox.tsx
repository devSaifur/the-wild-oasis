import { ReactNode } from 'react'

interface CheckBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  checked: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  disabled: boolean
  id: string
  children: ReactNode
}

const CheckBox = ({
  checked,
  onChange,
  disabled = false,
  id,
  children,
}: CheckBoxProps) => {
  return (
    <div className="flex gap-[1.6rem]">
      <input
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="h-[2.4rem] w-[2.4rem] origin-[0] accent-indigo-600 outline-offset-2 disabled:accent-indigo-600"
      />
      <label
        htmlFor={!disabled ? id : ''}
        className="flex flex-1 items-center gap-[0.8rem]"
      >
        {children}
      </label>
    </div>
  )
}

export default CheckBox
