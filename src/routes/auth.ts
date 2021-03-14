import { Router } from 'express'
import AuthController from '../controller/auth'

const route = Router()

const routes = [
  route.post('/register', AuthController.register),
  route.post('/login', AuthController.login),
]

export default routes
