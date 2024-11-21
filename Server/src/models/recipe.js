"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../config/connection"));
class Recipe extends sequelize_1.Model {
}
Recipe.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    ingredients: {
        type: sequelize_1.DataTypes.TEXT, // Stores JSON strings for the ingredients
        allowNull: false,
    },
    instructions: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
}, {
    sequelize: connection_1.default,
    modelName: 'Recipe',
    tableName: 'recipes',
    timestamps: false,
});
exports.default = Recipe;
