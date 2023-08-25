"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const games_1 = __importDefault(require("./routes/games"));
const body_parser_1 = __importDefault(require("body-parser"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
mongoose_1.default
    .connect(String(process.env.MONGO_URL))
    .then(() => {
    console.log("DB connection successful!");
})
    .catch((error) => console.log(error));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use("/api", games_1.default);
app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});
