import { Request, Response } from 'express'
import dotenv from 'dotenv'
import { createUser, generateToken } from '../utils'
import { registerValidation, loginValidation } from '../validations/AuthValidations'

dotenv.config()

export async function register(req: Request, res: Response) {
  try {
    const { errors } = await registerValidation(req.body)

    if (errors.length) return res.status(400).send({ errors })

    await createUser(req.body)

    const token = await generateToken(req.body)

    return res.status(200).send({ message: 'Usuario cadastrado!', token })
  } catch (error) {
    return res.status(400).send(error)
  }
}

export async function login(req: Request, res: Response) {
  try {
    const { errors, user } = await loginValidation(req.body)

    if (errors.length) return res.status(404).send({ errors })

    const token = await generateToken(user)

    return res.status(200).json({ user, token })
  } catch (error) {
    return res.status(400).send(error)
  }
}
