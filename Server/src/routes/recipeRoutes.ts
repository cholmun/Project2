import express from 'express';
import RecipeService from '../services/recipeService';

const router = express.Router();

// Fetch recipes by ingredients
router.get('/recipes', async (req, res) => {
  const { ingredients } = req.query;

  try {
    const recipes = await RecipeService.getRecipesByIngredients(
      ingredients as string
    );
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching recipes' });
  }
});

// Add a new recipe
router.post('/recipes', async (req, res) => {
  const { name, ingredients, instructions } = req.body;

  try {
    const recipe = await RecipeService.addRecipe({ name, ingredients, instructions });
    res.status(201).json(recipe);
  } catch (error) {
    res.status(500).json({ error: 'Error adding recipe' });
  }
});

export default router;