import * as Yup from 'yup';

import Command from '../models/Command';

import Product from '../models/Product';
import Table from '../models/Table';

import Notification from '../schemas/Notification';

class CommandController {
  async store(req, res) {
    const schema = Yup.object().shape({
      product_id: Yup.number().required(),
      table_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Validation is fails' });
    }

    const productExist = await Product.findByPk(req.body.product_id);

    if (!productExist) {
      return res.status(400).json({ error: 'Product is not exist' });
    }

    const tableExist = await Table.findByPk(req.body.table_id);

    if (!tableExist) {
      return res.status(400).json({ error: 'Table is not exist' });
    }

    const { product_id, table_id } = await Command.create(req.body);

    // Notify employee

    const { restaurant_id, number } = await Table.findOne({
      where: { id: req.body.table_id },
    });

    await Notification.create({
      content: `Novo pedido na mesa ${number}`,
      restaurant: restaurant_id,
    });

    return res.json({
      product_id,
      table_id,
    });
  }
}

export default new CommandController();
