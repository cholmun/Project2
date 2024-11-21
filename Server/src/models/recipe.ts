import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/config';

class Recipe extends Model {
  public id!: number;
  public name!: string;
  public ingredients!: string;
  public instructions!: string;
}

Recipe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredients: {
      type: DataTypes.TEXT, // Stores JSON strings for the ingredients
      allowNull: false,
    },
    instructions: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Recipe',
    tableName: 'recipes',
    timestamps: false,
  }
);

export default Recipe;