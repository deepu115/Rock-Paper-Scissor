import express from 'express';
const router = express.Router();


router.get('/play', (req, res) => {
    const playerName = req.app.locals.playerName;
    const gameMode = req.app.locals.gameMode || 'single';
    res.render('play', { name: playerName, mode: gameMode });
});

router.post('/play', (req, res) => {
    req.app.locals.playerChoice = req.body.choice;
    res.redirect('/result');
});



export default router;
