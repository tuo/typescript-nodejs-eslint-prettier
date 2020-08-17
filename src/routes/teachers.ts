import { Router } from 'express'

import controller from '../controllers/teachers'


const router = Router()

router.route('/').get(async (req, res, next) => {
    const teachers = await controller.list()
    res.json(teachers)
});

/*

.post(async (req, res, next) => {
    const result = await controller.createTeacher(req.body.first, req.body.last);
    res.json(result);
})

*/

export default router;
