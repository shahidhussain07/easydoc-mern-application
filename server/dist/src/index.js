"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const models_1 = __importDefault(require("./db/models"));
const routes_1 = __importDefault(require("./routes"));
const cors_1 = __importDefault(require("cors"));
const error_handler_1 = __importDefault(require("./middleware/error-handler"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: "*",
}));
app.use(routes_1.default);
app.use(error_handler_1.default);
const PORT = 8080;
models_1.default.sequelize.sync();
app.get("/", (req, res) => {
    res.send("Express + Typescript server19111");
});
app.listen(PORT, () => {
    console.log(`server running at port: ${PORT}`);
});
