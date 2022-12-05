const { Sequelize } = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE, process.env.LOGIN, process.env.PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;
