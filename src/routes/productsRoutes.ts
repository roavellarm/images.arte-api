import { Router } from 'express'

import imageUploader from '../config/uploadConfig'
import { isAuthorized } from '../middleware/AuthMiddleware'
import { create, getById, getAll } from '../controller/ProductController'

const productsRoute = Router()

productsRoute.post('/products', isAuthorized, imageUploader, create)
productsRoute.get('/products/:id', getById)
productsRoute.get('/products', getAll)

export default productsRoute
