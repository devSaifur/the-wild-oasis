import Input from './Input'
import Button from './Button'

const FileInput = () => {
  return (
    <div className="rounded-sm text-sm">
      <Button>Chose a file</Button>
      <Input id="picture" type="file" />
    </div>
  )
}

export default FileInput
