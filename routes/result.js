import express from 'express';
import Game from '../src/Game.js';
const router = express.Router();


const game = new Game();

router.get('/result', (req, res) => {
    const playerChoice = req.app.locals.playerChoice;
    const gameResult = game.result(playerChoice);
    res.render('result', {
        mode: 'single',
        playerName: req.app.locals.playerName,
        playerChoice: playerChoice,
        computerChoice: gameResult.computerChoice,
        result: gameResult.result,
    });
});
export default router;
