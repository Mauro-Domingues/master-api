import { Router } from 'express'
import auth from '../middlewares/auth.js'
import ClientController from '../controllers/ClientController.js'

const router = Router()
const cltController = new ClientController()

export default router