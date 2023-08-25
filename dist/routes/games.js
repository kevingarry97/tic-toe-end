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
const game_1 = require("../model/game");
const router = express_1.default.Router();
router.get("/game", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const game = yield game_1.Game.find();
    if (!game)
        return res.status(404).send('No Game');
    res.status(200).send(game);
}));
router.post('/game', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { player1, player2, winner } = req.body;
    const game = new game_1.Game({
        player1,
        player2,
        winner
    });
    yield game.save();
    res.status(200).send(game);
}));
exports.default = router;
