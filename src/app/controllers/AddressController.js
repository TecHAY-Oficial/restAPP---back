import * as Yup from 'yup';

import Address from '../models/Address';

class AddressController {
  async store(req, res) {
    const schema = Yup.object().shape({
      street: Yup.string,
      number: Yup.string,
      postalCode: Yup.string,
      state: Yup.string,
      city: Yup.string,
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation is fails' });
    }

    const { street, number, postalCode, state, city } = Address.create(
      req.body
    );

    return res.json({
      street,
      number,
      postalCode,
      state,
      city,
    });
  }
}

export default new AddressController();
