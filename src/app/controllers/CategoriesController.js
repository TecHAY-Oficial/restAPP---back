import * as Yup from 'yup';

import Categories from '../models/Categories';

class CategoriesController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      icon: Yup.string().required(),
      color: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Validation is fails' });
    }

    const { name, icon, color } = await Categories.create(req.body);

    return res.json({
      name,
      icon,
      color,
    });
  }
}

export default new CategoriesController();
