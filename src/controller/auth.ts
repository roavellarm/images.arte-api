import { Response, Request } from 'express'
import { createUser } from '../utils'
import { registerValidation, loginValidation } from '../validators/auth'

export const register = async (req: Request, res: Response) => {
  try {
    const { errors } = await registerValidation(req.body)
    if (errors.length) return res.status(404).send({ errors })

    await createUser(req.body)
    return res.status(200).json({ message: 'User register successfully' })
  } catch (error) {
    return res.status(400).send(error)
  }
}

export const login = async (req: Request, res: Response) => {
  try {
    const { errors, user } = await loginValidation(req.body)
    if (errors.length) return res.status(404).send({ errors })

    return res.status(200).json(user)
  } catch (error) {
    return res.status(400).send(error)
  }
}

export default { register, login }
