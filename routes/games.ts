import express from "express";
import { Game } from '../model/game';
const router = express.Router();

router.get("/game", async (req, res) => {
    const game = await Game.find();

    if(!game) return res.status(404).send('No Game');

    res.status(200).send(game);
})

router.post('/game', async (req, res) => {
    const { player1, player2, winner } = req.body;

    const game = new Game({
        player1,
        player2,
        winner
    });

    await game.save()

    res.status(200).send(game)
})

export default router;