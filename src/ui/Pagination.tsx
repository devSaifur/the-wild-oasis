import { useSearchParams } from 'react-router-dom'
import { PAGE_SIZE } from '../utils/constants'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'

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
    <div>
      <p>
        Showing <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> to{' '}
        <span>
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{' '}
        of <span>{count}</span> results
      </p>

      <div>
        <button onClick={prevPage} disabled={currentPage === 1}>
          <HiChevronLeft />
          <span>Previous</span>
        </button>
        <button onClick={nextPage} disabled={currentPage === pageCount}>
          <span>Next</span>
          <HiChevronRight />
        </button>
      </div>
    </div>
  )
}

export default Pagination
