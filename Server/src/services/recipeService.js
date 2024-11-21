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
const axios_1 = __importDefault(require("axios"));
const recipe_1 = __importDefault(require("../models/recipe"));
class RecipeService {
    static getRecipesByIngredients(ingredients) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiKey = process.env.THEMEALDB_API_KEY;
            const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`;
            const response = yield axios_1.default.get(url, {
                headers: { Authorization: `Bearer ${apiKey}` },
            });
            return response.data.meals;
        });
    }
    static addRecipe(recipeData) {
        return __awaiter(this, void 0, void 0, function* () {
            const recipe = yield recipe_1.default.create(recipeData);
            return recipe;
        });
    }
}
exports.default = RecipeService;
