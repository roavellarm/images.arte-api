import dotenv from 'dotenv'
import { connectDataBase, startServer } from './config'
import routes from './routes'

dotenv.config()
const { DATA_BASE, PORT } = process.env

connectDataBase(String(DATA_BASE))

startServer(PORT || '8000', routes)
