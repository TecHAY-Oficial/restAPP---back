import Sequelize, { Model } from 'sequelize';

class Table extends Model {
  static init(sequelize) {
    super.init(
      {
        number: Sequelize.INTEGER,
        slug: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Restaurant, {
      foreignKey: 'restaurant_id',
      as: 'restaurant_table',
    });
  }
}

export default Table;
