"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const recipeService_1 = __importDefault(require("../services/recipeService"));
const router = express_1.default.Router();
// Fetch recipes by ingredients
router.get('/recipes', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ingredients } = req.query;
    try {
        const recipes = yield recipeService_1.default.getRecipesByIngredients(ingredients);
        res.json(recipes);
    }
    catch (error) {
        res.status(500).json({ error: 'Error fetching recipes' });
    }
}));
// Add a new recipe
router.post('/recipes', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, ingredients, instructions } = req.body;
    try {
        const recipe = yield recipeService_1.default.addRecipe({ name, ingredients, instructions });
        res.status(201).json(recipe);
    }
    catch (error) {
        res.status(500).json({ error: 'Error adding recipe' });
    }
}));
exports.default = router;
