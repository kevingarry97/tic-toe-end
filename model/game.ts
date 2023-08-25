import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
    player1: {
        type: String
    },
    player2: {
        type: String
    },
    winner: {
        type: Object
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
});

export const Game = mongoose.model('Game', gameSchema);