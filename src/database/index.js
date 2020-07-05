import Sequelize from 'sequelize';

import User from '../app/models/User';
import Restaurant from '../app/models/Restaurant';
import Address from '../app/models/Address';
import Table from '../app/models/Table';
import Categories from '../app/models/Categories';
import Product from '../app/models/Product';

import databaseConfig from '../config/database';

const models = [User, Restaurant, Address, Table, Categories, Product];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map((model) => model.init(this.connection));
    models.map(
      (model) => model.associate && model.associate(this.connection.models)
    );
  }
}

export default new Database();
