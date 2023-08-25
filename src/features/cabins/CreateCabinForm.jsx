import { useForm } from 'react-hook-form'

import Input from '../../ui/Input'
import Form from '../../ui/Form'
import Button from '../../ui/Button'
import FileInput from '../../ui/FileInput'
import Textarea from '../../ui/Textarea'
import FormRow from '../../ui/FormRow'
import { useCreateCabin } from './useCreateCabin'
import { useEditCabin } from './useEditCabin'

function CreateCabinForm({ cabinToEdit = {}, onCloseModal }) {
  const { createCabin, isCreating } = useCreateCabin()
  const { editCabin, isEditing } = useEditCabin()

  const { id: editId, ...editValues } = cabinToEdit
  const isEditSession = Boolean(editId)

  const {
    register,
    handleSubmit,
    reset: resetForm,
    getValues,
    formState,
  } = useForm({
    defaultValues: isEditSession ? editValues : {},
  })
  const { errors } = formState

  function onSubmit(data) {
    const image = typeof data.image === 'string' ? data.image : data.image[0]

    if (isEditSession) {
      editCabin(
        { newCabinData: { ...data, image }, id: editId },
        {
          onSuccess: () => {
            resetForm()
            onCloseModal?.()
          },
        }
      )
    } else
      createCabin(
        { ...data, image: image },
        {
          onSuccess: () => {
            resetForm()
          },
        }
      )
  }

  const isWorking = isCreating || isEditing

  return (
    <Form
      type={onCloseModal ? 'modal' : 'regular'}
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormRow label='Cabin name' error={errors?.name?.message}>
        <Input
          disabled={isWorking}
          type='text'
          id='name'
          {...register('name', {
            required: 'This field is required',
            min: {
              value: 1,
              message: 'Capacity should be at least 1',
            },
          })}
        />
      </FormRow>

      <FormRow label='Maximum capacity' error={errors?.maxCapacity?.message}>
        <Input
          disabled={isWorking}
          type='number'
          id='maxCapacity'
          {...register('maxCapacity', {
            required: 'This field is required',
            validate: (value) =>
              value <= 12 || 'Max capacity should be less than 12',
          })}
        />
      </FormRow>

      <FormRow label='Regular price' error={errors?.regularPrice?.message}>
        <Input
          disabled={isWorking}
          type='number'
          id='regularPrice'
          {...register('regularPrice', {
            required: 'This field is required',
            validate: (value) =>
              value < 1000 ||
              'Regular price should be less than 1000 per night',
          })}
        />
      </FormRow>

      <FormRow label='Discount' error={errors?.discount?.message}>
        <Input
          disabled={isWorking}
          type='number'
          id='discount'
          defaultValue={0}
          {...register('discount', {
            required: 'This field is required',
            validate: (value) =>
              value <= getValues().regularPrice ||
              "Discount can't be more than regular price",
          })}
        />
      </FormRow>

      <FormRow
        label='Description for website'
        error={errors?.description?.message}
      >
        <Textarea
          disabled={isWorking}
          type='number'
          id='description'
          defaultValue=''
          {...register('description', {
            required: 'This field is required',
          })}
        />
      </FormRow>

      <FormRow label='Cabin photo' error={errors?.image?.message}>
        <FileInput
          id='image'
          accept='image/*'
          {...register('image', {
            required: isEditSession ? false : 'This field is required',
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          onClick={() => onCloseModal?.()}
          disabled={isWorking}
          variation='secondary'
          type='reset'
        >
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? 'Edit cabin' : 'Add cabin'}
        </Button>
      </FormRow>
    </Form>
  )
}

export default CreateCabinForm
