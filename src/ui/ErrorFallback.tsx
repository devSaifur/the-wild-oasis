import Heading from './Heading'
import Button from './Button'

interface ErrorFallbackProps {
  error: string
  resetErrorBoundary: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const ErrorFallback = ({ error, resetErrorBoundary }: ErrorFallbackProps) => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-50 p-[4.8rem] dark:bg-gray-900">
      <div className="flex-[0_1_96rem] rounded-md border border-solid border-gray-100 bg-gray-0 p-[4.8rem] text-center dark:border-gray-800">
        <Heading className="mb-[1.6rem]" as="h1">
          Something went wrong
        </Heading>
        <p className="mb-[3.2rem] font-secondary text-gray-500 dark:text-gray-400">
          {error}
        </p>
        <Button size="large" onClick={resetErrorBoundary}>
          Try agin
        </Button>
      </div>
    </div>
  )
}

export default ErrorFallback
