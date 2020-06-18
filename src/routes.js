import { Router } from 'express';

const routes = new Router();

routes.use('/', (req, res) => {
  return res.json({ nada: 'nada' });
});

export default routes;
