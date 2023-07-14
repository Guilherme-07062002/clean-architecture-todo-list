import express from 'express';
import { Application, Router } from 'express';
import { adaptExpressRoute } from '../adapter/adapt-express-router';
import { makeCreateTaskController } from '../factories/makeCreateTaskController';
import { makeRemoveTaskController } from '../factories/makeRemoveTaskController';


export default (prefix: string, router: Router, app: Application): void => {
  app.use(express.json());
  app.use(router);

  router.get(`/${prefix}`, (req, res) => { res.send('oi') });
  router.delete(`/${prefix}`, (adaptExpressRoute(makeRemoveTaskController())))
  router.post(`/${prefix}`, (adaptExpressRoute(makeCreateTaskController())))
}
