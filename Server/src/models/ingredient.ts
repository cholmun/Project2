import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/config';

class Ingredient extends Model {
  public id!: number;
  public name!: string;
}

Ingredient.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: 'Ingredient',
    tableName: 'ingredients',
    timestamps: false,
  }
);

export default Ingredient;