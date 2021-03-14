import express, { Router } from 'express'
import cors from 'cors'

export default function startServer(port: string, routes: Router[]) {
  if (!port) throw Error(`Port is required to start server`)
  if (!routes) throw Error(`Routes are required to start server`)

  const app = express()

  app.use(express.json())
  app.use(cors())
  app.use(routes)

  // eslint-disable-next-line no-console
  app.listen(port, () => console.log(`⚡ Server is running on port ${port} 🎉`))
}
