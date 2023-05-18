import { forwardRef } from 'react'

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, ...props }, ref) => {
    return (
      <div className="flex w-full flex-col gap-1">
        {label && <label htmlFor={props.id}>{label}</label>}
        <input
          {...props}
          ref={ref}
          className="rounded-md border border-zinc-200 p-2 focus:border-cyan-400 focus:outline-none"
        />
      </div>
    )
  },
)
