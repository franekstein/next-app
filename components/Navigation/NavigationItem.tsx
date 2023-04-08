import clsx from 'clsx'
import Link from 'next/link'

export interface NavigationItemProps {
  href: string
  title: string
  active: boolean
}

export const NavigationItem = ({
  href,
  title,
  active,
}: NavigationItemProps) => {
  const classes = clsx('text-gray-700 hover:text-indigo-600', {
    'font-bold': active,
  })

  return (
    <li className={classes}>
      <Link href={href} className="block">
        {title}
      </Link>
    </li>
  )
}
