import { Model } from 'sequelize';

class Command extends Model {
  static init(sequelize) {
    super.init(
      {},
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Product, {
      foreignKey: 'product_id',
      as: 'product_command',
    });
    this.belongsTo(models.Table, {
      foreignKey: 'table_id',
      as: 'table_command',
    });
  }
}

export default Command;
