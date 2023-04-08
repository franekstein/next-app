import { ChevronLeftIcon } from '@/icons/ChevronLeftIcon'
import clsx from 'clsx'
import Link from 'next/link'

export interface PaginationPrevProps {
  href: string
  onClick?: VoidFunction
  disabled?: boolean
}

export const PaginationPrev = ({
  href,
  onClick,
  disabled = false,
}: PaginationPrevProps) => {
  const buttonClasses = clsx(
    'hover:text-indigo-600 flex items-center gap-x-2',
    {
      'cursor-not-allowed hover:text-current pointer-events-none opacity-25':
        disabled,
    }
  )
  return (
    <Link onClick={onClick} href={href} className={buttonClasses}>
      <ChevronLeftIcon />
      Previous
    </Link>
  )
}
