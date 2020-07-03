import Sequelize, { Model } from 'sequelize';

class Address extends Model {
  static init(sequelize) {
    super.init(
      {
        street: Sequelize.STRING,
        number: Sequelize.STRING,
        postalCode: Sequelize.STRING,
        state: Sequelize.STRING,
        city: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default Address;
