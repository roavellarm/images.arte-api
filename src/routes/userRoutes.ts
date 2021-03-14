import { Router } from 'express'
import { update, getAll } from '../controller/UserController'

const userRoutes = Router()

userRoutes.put('/users/:_id', update)
userRoutes.get('/users', getAll) // TODO: remove before sending to staging

export default userRoutes
