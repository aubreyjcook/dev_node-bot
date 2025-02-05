"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.post('/execute', (req, res) => {
    const command = req.body;
    if (command.action === 'startTask') {
        console.log(`Starting task with params: ${command.params.join(', ')}`);
        res.status(200).send('Command executed');
    }
    else {
        res.status(400).send('Invalid command');
    }
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
