import express from 'express';
const router = express.Router();

router.get('/singlePlayer', (req, res) => {
    res.render('index', { mode: 'single' });
});

router.post('/setName', (req, res) => {
    req.app.locals.playerName = req.body.name;
    res.redirect('/play');
});
router.get('/multiPlayer', (req, res) => {
    res.render('index', { mode: 'multi' });
});

router.post('/setMultiNames', (req, res) => {
    req.app.locals.player1Name = req.body.player1Name;
    req.app.locals.player2Name = req.body.player2Name;
    res.redirect('/multiPlay');
});

export default router;

