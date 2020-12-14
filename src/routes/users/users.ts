import { Router } from 'express'

import { store } from '../../controllers/users/index'

const router = Router()

router.post('/store', store)

export default router
