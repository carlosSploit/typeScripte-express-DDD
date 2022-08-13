"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
// ---------- routers
//import apiUseExc from './src/routers/apis';
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.static('public'));
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get('/', (_req, res) => {
    res.sendFile(__dirname + '/src/views/index.html');
});
//app.use('/api',apiUseExc);
app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port ' + process.env.PORT);
});
