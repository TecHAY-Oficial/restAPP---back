import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const employees = await User.findAll({
      where: {
        is_restaurant: false,
        restaurant_id: req.params.id,
      },
      limit: 9,
      offset: (page - 1) * 9,
      attributes: ['id', 'name', 'email'],
    });

    return res.json(employees);
  }

  async store(req, res) {
    const checkUserRestaurant = await User.findOne({
      where: { id: req.userId, is_restaurant: true },
    });

    if (!checkUserRestaurant) {
      return res.status(401).json({ error: 'User is not a restaurant' });
    }

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation is fails' });
    }

    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'User already register' });
    }

    const { id, name, email } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
    });
  }
}

export default new UserController();
