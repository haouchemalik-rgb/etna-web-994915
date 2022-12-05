import sequelize from './instance';

async function authDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

authDatabase().then(() => {
    console.log('DATABASE CONNECT');
});
