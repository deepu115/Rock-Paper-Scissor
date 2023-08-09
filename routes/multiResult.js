import express from 'express';
import Game from '../src/Game.js';
const router = express.Router();

const game = new Game();

router.get('/multiResult', (req, res) => {
    const player1Name = req.app.locals.player1Name;
    const player2Name = req.app.locals.player2Name;
    const player1Choice = req.app.locals.player1Choice;
    const player2Choice = req.app.locals.player2Choice;

    const game = new Game(player1Name, player2Name);

    const result = game.multiplayerResult(player1Choice, player2Choice);
    res.render('result', {
        mode: 'multi',
        playerName: player1Name,
        opponentName: player2Name,
        playerChoice: player1Choice,
        opponentChoice: player2Choice,
        result: result.result

    });
});

export default router;
