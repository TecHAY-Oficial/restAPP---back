import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import RestaurantController from './app/controllers/RestaurantController';
import AddressController from './app/controllers/AddressController';
import TableController from './app/controllers/TableController';
import CategoriesController from './app/controllers/CategoriesController';
import ProductController from './app/controllers/ProductController';
import CommandController from './app/controllers/CommandController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.post('/commands', CommandController.store);

routes.use(authMiddleware);

routes.get('/restaurant/:id/employee', UserController.index);
routes.post('/restaurant/employee', UserController.store);

routes.post('/restaurant', RestaurantController.store);
routes.get('/restaurant/:id', RestaurantController.index);

routes.post('/restaurant/table', TableController.store);

routes.post('/menu/categories', CategoriesController.store);
routes.post('/menu/categories/products', ProductController.store);

routes.post('/address', AddressController.store);

export default routes;
