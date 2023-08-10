import express from 'express';
const router = express.Router();



router.get('/multiPlay/player1Choice', (req, res) => {
    const gameMode = req.app.locals.gameMode || 'multi';
    const player1Name = req.app.locals.player1Name;
    res.render('play', { name: player1Name, step: 'player1', mode: gameMode });
});

router.post('/multiPlay/player1Choice', (req, res) => {
    req.app.locals.player1Choice = req.body.choice;
    res.redirect('/multiPlay/player2Choice');
});

router.get('/multiPlay/player2Choice', (req, res) => {
    const gameMode = req.app.locals.gameMode || 'multi';
    const player2Name = req.app.locals.player2Name;
    res.render('play', { name: player2Name, step: 'player2', mode: gameMode });
});

router.post('/multiPlay/player2Choice', (req, res) => {
    req.app.locals.player2Choice = req.body.choice;
    res.redirect('/multiResult');
});

export default router;