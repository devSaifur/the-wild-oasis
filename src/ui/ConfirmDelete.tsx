import Heading from './Heading'
import Button from './Button'

interface ConfirmDeleteProps {
  resourceName: string
  disabled: boolean
  onConfirm: (e: React.MouseEvent<HTMLButtonElement>) => void
  onCloseModal: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const ConfirmDelete = ({
  resourceName,
  disabled,
  onConfirm,
  onCloseModal,
}: ConfirmDeleteProps) => {
  return (
    <div className="flex w-[40rem] flex-col gap-[1.2rem]">
      <Heading as="h3">Delete {resourceName}</Heading>
      <p className="mb-[1.2rem] text-gray-500 dark:text-gray-400">
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>

      <div className="flex justify-end gap-[1.2rem]">
        <Button variant="secondary" disabled={disabled} onClick={onCloseModal}>
          Cancel
        </Button>
        <Button variant="danger" disabled={disabled} onClick={onConfirm}>
          Delete
        </Button>
      </div>
    </div>
  )
}

export default ConfirmDelete
