export interface IUser {
  _id: string
  firstname?: string
  lastname?: string
  email: string
  password: string
  roles: Array<string>
  phoneNumber?: string
  cpf?: string
}
