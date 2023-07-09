import express from 'express';
import { Application, Router } from 'express';
import { adaptExpressRoute } from '../adapter/adapt-express-router';
import { makeCreateTaskController } from '../factories/makeCreateTaskController';


export default (prefix: string, router: Router, app: Application): void => {
    app.use(express.json());
    router.get(`/${prefix}`, (req, res) => {
        res.send('oi');
      });
      
    router.post(`/${prefix}`, (adaptExpressRoute(makeCreateTaskController())))
    console.log('pamonha')
    app.use(router);
}
