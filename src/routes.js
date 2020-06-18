import { Router } from 'express';

import UserController from './app/controllers/UserController';

const routes = new Router();

routes.use('/restaurant/employee', UserController.store);

export default routes;
