import clsx from 'clsx'

type Props = {
  href: string
  children: React.ReactNode
  reverse?: boolean
}

export const ButtonLink: React.FC<Props> = ({ href, reverse, children }) => {
  return (
    <a
      href={href}
      className={clsx(
        'w-full rounded-md border px-8 py-3 text-center font-semibold transition-colors',
        {
          'border-cyan-400 bg-cyan-400 hover:bg-cyan-500': !reverse,
          'border-zinc-400 bg-transparent hover:bg-zinc-100': reverse,
        },
      )}
    >
      {children}
    </a>
  )
}
