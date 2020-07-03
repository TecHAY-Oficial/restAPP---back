import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import RestaurantController from './app/controllers/RestaurantController';
import AddressController from './app/controllers/AddressController';

const routes = new Router();

routes.use('/restaurant', RestaurantController.store);
routes.use('/restaurant/employee', UserController.store);
routes.use('/sessions', SessionController.store);
routes.use('/address', AddressController.store);

export default routes;
