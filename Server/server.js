"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3001;
// Simple route to test the server.
//app.get('/', (req: express.Request, res: express.Response) => {
//  res.send('Hello, World!');
// });
// Start server
app.use(express_1.default.static('../client/dist'));
app.use(express_1.default.json());
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
