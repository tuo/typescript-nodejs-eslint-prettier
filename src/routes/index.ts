import { Router } from 'express'
import teacherRoutes from './teachers'

const router = Router()

router.use('/teachers', teacherRoutes);
export default router