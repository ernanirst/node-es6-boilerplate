import express from 'express'
import cors from 'cors'
import logger from './logger'
import db from './db'
import { healthController } from './controllers'

const PORT = 3000
const app = express()
app.use(express.json())
app.use(cors())
app.use('/', healthController)

db()
  .catch( err => logger.error(err) )
  .then(() => app.listen(PORT, () => logger.info(`Server running on port ${PORT}`)))
