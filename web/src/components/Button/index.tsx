import clsx from 'clsx'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
  reverse?: boolean
}

export const Button: React.FC<Props> = ({ reverse, children, ...props }) => {
  return (
    <button
      {...props}
      className={clsx(
        'w-full cursor-pointer rounded-md border px-8 py-3 text-center font-semibold transition-colors',
        {
          'border-cyan-400 bg-cyan-400 hover:bg-cyan-500': !reverse,
          'border-zinc-400 bg-transparent hover:bg-zinc-100': reverse,
          'cursor-not-allowed opacity-50': props.disabled,
        },
      )}
    >
      {children}
    </button>
  )
}
