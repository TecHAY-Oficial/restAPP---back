import * as Yup from 'yup';

import Restaurant from '../models/Restaurant';

class RestaurantController {
  async index(req, res) {
    console.log(req.query.id);
    const a = await Restaurant.findOne({
      where: { id: req.query.id },
    });

    return res.json(a);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      phone: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation is fails' });
    }

    const { id, name, phone } = await Restaurant.create(req.body);

    return res.json({
      id,
      name,
      phone,
    });
  }
}

export default new RestaurantController();
