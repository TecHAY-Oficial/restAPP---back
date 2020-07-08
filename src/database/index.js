import Sequelize from 'sequelize';
import mongoose from 'mongoose';

import User from '../app/models/User';
import Restaurant from '../app/models/Restaurant';
import Address from '../app/models/Address';
import Table from '../app/models/Table';
import Categories from '../app/models/Categories';
import Product from '../app/models/Product';
import Command from '../app/models/Command';

import databaseConfig from '../config/database';

const models = [User, Restaurant, Address, Table, Categories, Product, Command];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map((model) => model.init(this.connection));
    models.map(
      (model) => model.associate && model.associate(this.connection.models)
    );
  }

  mongo() {
    this.mongoConnection = mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    });
  }
}

export default new Database();
