import { PaginationMobile } from './PaginationMobile'
import { PaginationNext } from './PaginationNext'
import { PaginationPrev } from './PaginationPrev'

export interface PaginationProps {
  hasPrev: boolean
  hasNext: boolean
  offset: number
  take: number
  disabled?: boolean
  params?: boolean
}

export const Pagination = (props: PaginationProps) => {
  const {
    hasNext,
    hasPrev,
    take,
    offset,
    disabled = false,
    params = true,
  } = props

  const prevOffset = hasPrev ? offset - take : offset
  const prevUrl = params
    ? `/products?take=${take}&offset=${prevOffset}`
    : `/products/${take}/${prevOffset}`

  const nextOffset = hasNext ? offset + take : offset
  const nextUrl = params
    ? `/products?take=${take}&offset=${nextOffset}`
    : `/products/${take}/${nextOffset}`

  return (
    <div className="max-w-screen-xl mx-auto mt-12 px-4 text-gray-600 md:px-8">
      <div
        className="hidden items-center justify-between sm:flex"
        aria-label="Pagination"
      >
        <PaginationPrev href={prevUrl} disabled={!hasPrev || disabled} />
        <PaginationNext href={nextUrl} disabled={!hasNext || disabled} />
      </div>
      {/* On mobile version */}
      <PaginationMobile {...props} />
    </div>
  )
}
