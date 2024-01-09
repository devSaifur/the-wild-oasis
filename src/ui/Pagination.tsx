import { useSearchParams } from 'react-router-dom'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'

import { PAGE_SIZE } from '../utils/constants'
import { cn } from '../lib/utils'

const Pagination = ({ count }: { count: number }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const currentPage = !searchParams.get('page')
    ? 1
    : Number(searchParams.get('page'))

  const pageCount = Math.ceil(count / PAGE_SIZE)

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1

    searchParams.set('page', next.toString())
    setSearchParams(searchParams)
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1

    searchParams.set('page', prev.toString())
    setSearchParams(searchParams)
  }

  if (pageCount <= 1) return null

  return (
    <div className="flex w-full items-center justify-between">
      <p className="ml-[0.8rem] text-sm">
        Showing{' '}
        <span className="font-semibold">
          {(currentPage - 1) * PAGE_SIZE + 1}
        </span>{' '}
        to{' '}
        <span className="font-semibold">
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{' '}
        of <span className="font-semibold">{count}</span> results
      </p>

      <div className="flex gap-[0.6rem]">
        <PaginationButton onClick={prevPage} disabled={currentPage === 1}>
          <span className="h-[1.8rem] w-[1.8rem]">
            <HiChevronLeft />
          </span>
          <span className="pr-[0.4rem]">Previous</span>
        </PaginationButton>
        <PaginationButton
          onClick={nextPage}
          disabled={currentPage === pageCount}
        >
          <span className="pl-[0.4rem]">Next</span>
          <span className="h-[1.8rem] w-[1.8rem]">
            <HiChevronRight />
          </span>
        </PaginationButton>
      </div>
    </div>
  )
}

interface PaginationButtonProps {
  active?: boolean
}

const PaginationButton = ({
  children,
  active,
  disabled,
  ...props
}: React.ComponentProps<'button'> & PaginationButtonProps) => {
  return (
    <button
      className={cn(
        'border-node flex items-center justify-center gap-[0.4rem] rounded-sm px-[1.2rem] py-[0.6rem] text-sm font-medium transition-all delay-200',
        { 'bg-indigo-600': active },
        { 'bg-gray-50 dark:bg-gray-900': !active },
        { 'cursor-not-allowed': disabled },
        { 'bg-indigo-600 hover:text-indigo-50': !disabled }
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export default Pagination
