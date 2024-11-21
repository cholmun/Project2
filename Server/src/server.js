"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const connection_1 = __importDefault(require("./config/connection"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const recipeRoutes_1 = __importDefault(require("./routes/recipeRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
app.use(express_1.default.json());
app.use('/api/auth', authRoutes_1.default);
app.use('/api/recipes', recipeRoutes_1.default);
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
connection_1.default.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}).catch((error) => {
    console.error('Unable to connect to the database:', error);
});