import { Application, Router } from 'express';
import taskRoutes from '../routes/task-routes';

export default (app: Application, router: Router): void => {
    taskRoutes('task', router, app)
};