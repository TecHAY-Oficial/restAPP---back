import * as Yup from 'yup';

import Table from '../models/Table';

class TableController {
  async store(req, res) {
    const schema = Yup.object().shape({
      number: Yup.number().required(),
      slug: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Validation is fails' });
    }

    const tableExists = await Table.findOne({
      where: {
        slug: req.body.slug,
      },
    });

    if (tableExists) {
      return res.status(409).json({ error: 'Table is already' });
    }

    const { number, slug, restaurant_id } = await Table.create(req.body);

    return res.json({
      number,
      slug,
      restaurant_id,
    });
  }
}

export default new TableController();
