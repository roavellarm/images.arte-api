import { Router } from 'express'
import { create, getAll } from '../controller/CathegoryController'

const categoryRoute = Router()

categoryRoute.post('/categoryRegister', create)
categoryRoute.get('/category', getAll)

export default categoryRoute
