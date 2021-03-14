import { getUserById, isValidCPF } from '../utils'
import { IUser } from '../interfaces'

export async function validateUpdateUser(data: IUser) {
  const errors = []
  const { _id, cpf } = data

  if (cpf && !isValidCPF(cpf)) errors.push('CPF inválido')

  if (errors.length) return { errors }

  const user = (await getUserById(_id)) as IUser

  if (!user) errors.push('Usuário inexistente')

  return { errors, user }
}
