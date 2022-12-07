import sequelize from './instance';

import Users from './models/Users';
import Channels from './models/Channels'

async function authDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}


async function migration() {
  await Users.sync();
  await Channels.sync();
}

// If param is dbcheck program only runs connexion function
// Otherwise runs connexion and migration functions
if (process.argv[2] === 'dbcheck') {
  authDatabase();
} else {
  authDatabase();
  migration();
}
