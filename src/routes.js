import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.use('/restaurant/employee', UserController.store);
routes.use('/sessions', SessionController.store);

export default routes;
