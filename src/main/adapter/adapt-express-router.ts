import { Env } from '@/index';
import { Request, Response, NextFunction } from 'express';
import { MakeController } from './../ports/make-controller';

export const adaptExpressRoute = (makeController: MakeController) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const env: Env = {
        'SQLITE_DB_NAME': 'db',
        'SQLITE_USER_NAME': 'user',
        'SQLITE_PASSWORD': 'user'
      };

      const controller = makeController(env);
      const response = await controller.handle({
        body: req.body,
        params: req.params,
        query: req.query,
      });

      return res.status(response.status).json(response.body);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  };
};
