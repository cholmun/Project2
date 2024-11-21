import axios from 'axios';
import Recipe from '../models/recipe';

class RecipeService {
  static async getRecipesByIngredients(ingredients: string) {
    const apiKey = process.env.THEMEALDB_API_KEY;
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`;

    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${apiKey}` },
    });

    return response.data.meals;
  }

  static async addRecipe(recipeData: {
    name: string;
    ingredients: string;
    instructions: string;
  }) {
    const recipe = await Recipe.create(recipeData);
    return recipe;
  }
}

export default RecipeService;