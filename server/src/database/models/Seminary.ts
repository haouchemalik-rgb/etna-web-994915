import { DataTypes, literal } from 'sequelize';
import sequelize from '../instance';

const Seminary = sequelize.define('Seminary',
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'now',
    },

    zelda: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'n',
    },
    
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: 'now',
    },
    startTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: literal('CURRENT_TIMESTAMP'),
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: literal('CURRENT_TIMESTAMP'),
    },
    isAllDay: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'now',
    },
    priority: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'now',
    },
  })

export default Seminary;
