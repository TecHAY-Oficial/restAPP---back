import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import RestaurantController from './app/controllers/RestaurantController';
import AddressController from './app/controllers/AddressController';

const routes = new Router();

routes.post('/restaurant', RestaurantController.store);
routes.get('/restaurant', RestaurantController.index);
routes.post('/restaurant/employee', UserController.store);
routes.post('/sessions', SessionController.store);
routes.post('/address', AddressController.store);

export default routes;
