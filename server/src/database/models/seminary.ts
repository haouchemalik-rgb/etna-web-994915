import Sequence from 'mysql2/typings/mysql/lib/protocol/sequences/Sequence';
import { DataTypes } from 'sequelize';
import sequelize from '../instance';

const Seminary = sequelize.define('Seminary', 
{
    id:  {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique:true,
      },
    name: {
        type: DataTypes.STRING,
        allowNull: false, 
          },
   
     description: {
    type: DataTypes.STRING(500), 
     allowNull: false,
    },
    date_of_event: {
        type: DataTypes.DATE,
        allowNull: false,
    },


})

export default Seminary;
