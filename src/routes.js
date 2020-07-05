import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import RestaurantController from './app/controllers/RestaurantController';
import AddressController from './app/controllers/AddressController';
import TableController from './app/controllers/TableController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);
routes.post('/restaurant/employee', UserController.store);

routes.use(authMiddleware);
routes.post('/restaurant', RestaurantController.store);
routes.post('/restaurant/table', TableController.store);
routes.get('/restaurant/:id', RestaurantController.index);
routes.post('/address', AddressController.store);

export default routes;
