import express from 'express';
import Game from '../src/Game.js';
const router = express.Router();


const game = new Game();

router.post('/result', (req, res) => {
    const playerChoice = req.body.choice;
    const result = game.result(playerChoice);
    res.render('result', { name: req.app.locals.playerName, choice: playerChoice, computerChoice: result.computerChoice, result: result.result });
});
export default router;
