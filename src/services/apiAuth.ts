import { UserAttributes } from '@supabase/supabase-js'
import supabase, { supabaseUrl } from './supabase'

async function signup({
  fullName,
  email,
  password,
}: {
  fullName: string
  email: string
  password: string
}) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: '',
      },
    },
  })

  if (error) throw new Error(error.message)

  return data
}

async function login({ email, password }: { email: string; password: string }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) throw new Error(error.message)

  return data
}

async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession()

  if (!session.session) return null

  const { data, error } = await supabase.auth.getUser()

  if (error) throw new Error(error.message)

  return data?.user
}

async function logout() {
  const { error } = await supabase.auth.signOut()
  if (error) throw new Error(error.message)
}

async function updateCurrentUser({
  fullName,
  password,
  avatar,
}: {
  fullName?: string
  password?: string
  avatar?: string
}) {
  let updateData
  if (fullName) updateData = { data: { fullName } }
  if (password) updateData = { password }

  const { data, error } = await supabase.auth.updateUser(
    updateData as UserAttributes
  )

  if (error) throw new Error(error.message)
  if (!avatar) return data

  const fileName = `avatar=${data.user.id}-${Math.random()}`

  const { error: storageError } = await supabase.storage
    .from('avatars')
    .upload(fileName, avatar)

  if (storageError) throw new Error(storageError.message)

  const { data: updatedUser, error: error2 } = await supabase.auth.updateUser({
    data: {
      avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
    },
  })

  if (error2) throw new Error(error2.message)

  return updatedUser
}

export { signup, login, getCurrentUser, logout, updateCurrentUser }
