import { Router } from 'express';

import controller from '../controllers/teachers';

const router = Router();

router
  .route('/')
  .get(async (req, res, next) => {
    const teachers = await controller.list();
    res.json(teachers);
  })
  .post(async (req, res, next) => {
    const result = await controller.create(req.body.first, req.body.last);
    res.json(result);
  });

router
  .route('/:id(\\d+)')
  .get(async (req, res, next) => {
    try {
      res.json(await controller.get(+req.params.id));
    } catch (e) {
      res.status(500).send(e.message);
    }
  })
  .put(async (req, res, next) => {
    res.json(await controller.update(+req.params.id, req.body.first, req.body.last));
  })
  .delete(async (req, res, next) => {
    res.json(await controller.deleteTeacher(+req.params.id));
  });

router.route('/:id(\\d+)/classes').get(async (req, res, next) => {
  res.json(await controller.getClasses(+req.params.id));
});

export default router;
