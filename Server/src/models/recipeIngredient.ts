import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/connection';

class RecipeIngredient extends Model {
  public recipeId!: number;
  public ingredientId!: number;
}

RecipeIngredient.init(
  {
    recipeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'recipes', key: 'id' },
    },
    ingredientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'ingredients', key: 'id' },
    },
  },
  {
    sequelize,
    modelName: 'RecipeIngredient',
    tableName: 'recipe_ingredients',
    timestamps: false,
  }
);

export default RecipeIngredient;