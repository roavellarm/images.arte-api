import { isValidEmail, isValidPassword, getUserByEmail, getUserByEmailAndPassword } from '../utils'
import { IUser } from '../interfaces'

export async function registerValidation(data: IUser) {
  const errors: string[] = []
  const { email, password } = data

  if (!isValidEmail(email)) errors.push('Invalid email')

  if (!isValidPassword(password))
    errors.push('Password must contain 8 characters, uppercase and lowercase')

  if (errors.length) return { errors }

  const userExists = await getUserByEmail(email)
  if (userExists) errors.push('This email already registered')

  return { errors }
}

export async function loginValidation(data: IUser) {
  const errors: string[] = []
  const { email, password } = data

  if (!isValidEmail(email)) errors.push('Invalid email')

  if (!isValidPassword(password))
    errors.push('Password must contain 8 characters, uppercase and lowercase')

  if (errors.length) return { errors }

  const user = await getUserByEmailAndPassword(email, password)

  if (!user) errors.push('User not found')

  return { errors, user }
}
