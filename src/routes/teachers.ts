import { Router } from 'express';

import controller from '../controllers/teachers';

import * as util from '../libs/util';
import * as calc from '../libs/calc';

const router = Router();

router
  .route('/')
  .get(async (req, res, next) => {
    const teachers = await controller.list();
    res.json({ teachers, timestamp: util.formatDate(new Date()), maxInterval: calc.maxInterval });
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
