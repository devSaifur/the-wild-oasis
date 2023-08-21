import supabase, { supabaseUrl } from './supabase'

async function getCabins() {
  const { data, error } = await supabase.from('cabins').select('*')

  if (error) {
    console.error(error)
    throw new Error('Cabins could not be loaded')
  }

  return data
}

async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl)

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    '/',
    ''
  )
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`

  // create/edit the cabin
  let query = supabase.from('cabins')
  //create
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }])
  //edit
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq('id', id)

  const { data, error } = await query.select().single()

  if (error) {
    console.error(error)
    throw new Error('Cabins could not be created')
  }

  // Uploading the image
  if (hasImagePath) return data

  const { error: storageError } = await supabase.storage
    .from('cabin-images')
    .upload(imageName, newCabin.image)

  // Deleting the cabin if there is a problem uploading the image
  if (storageError) {
    await supabase.from('cabins').delete().eq('id', data.id)
    console.error(storageError)
    throw new Error(
      'Cabin image could not be uploaded & the cabin was not created'
    )
  }
  return data
}

async function deleteCabin(id) {
  const { data, error } = await supabase.from('cabins').delete().eq('id', id)

  if (error) {
    throw new Error('Cabins could not be deleted')
  }
  return data
}

export { getCabins, deleteCabin, createEditCabin }
