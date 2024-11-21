"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../config/connection"));
class RecipeIngredient extends sequelize_1.Model {
}
RecipeIngredient.init({
    recipeId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'recipes', key: 'id' },
    },
    ingredientId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'ingredients', key: 'id' },
    },
}, {
    sequelize: connection_1.default,
    modelName: 'RecipeIngredient',
    tableName: 'recipe_ingredients',
    timestamps: false,
});
exports.default = RecipeIngredient;
