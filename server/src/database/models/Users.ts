import { DataTypes } from 'sequelize';
import sequelize from '../instance';

const Users = sequelize.define('Users', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    unique:true,
  },
  admin: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    default: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  channels: {
    type: DataTypes.JSON,
    allowNull: true,
    default: {},
  }  
});

export default Users;
