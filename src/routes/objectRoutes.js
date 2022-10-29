import { Router } from 'express'
import auth from '../middlewares/auth.js'
import ObjectController from '../controllers/ObjectController.js'

const router = Router()
const objController = new ObjectController()

router.get('/', auth, objController.get)
router.get('/:id', auth, objController.getById)
router.get('/:name', auth, objController.getByName)
router.get('/:something', auth, objController.getBySomething)
router.post('/', objController.create)
router.post('/login', objController.login)
router.put('/:id', auth, objController.update)
router.delete('/:id', auth, objController.delete)

export default router