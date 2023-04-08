import clsx from 'clsx'
import { PaginationProps } from './Pagination'
import Link from 'next/link'

export const PaginationMobile = ({
  params,
  offset,
  take,
  disabled,
  hasNext,
  hasPrev,
}: PaginationProps) => {
  const prevClasses = clsx(
    'px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50',
    { 'opacity-25': !hasPrev || disabled }
  )

  const nextClasses = clsx(
    'px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50',
    { 'opacity-25': !hasNext || disabled }
  )

  const prevOffset = hasPrev ? offset - take : offset
  const prevUrl = params
    ? `/products?take=${take}&offset=${prevOffset}`
    : `/products/${take}/${prevOffset}`

  const nextOffset = hasNext ? offset + take : offset
  const nextUrl = params
    ? `/products?take=${take}&offset=${nextOffset}`
    : `/products/${take}/${nextOffset}`

  return (
    <div className="flex items-center justify-between text-sm text-gray-600 font-medium sm:hidden">
      <Link href={prevUrl} className={prevClasses}>
        Previous
      </Link>
      <Link href={nextUrl} className={nextClasses}>
        Next
      </Link>
    </div>
  )
}
