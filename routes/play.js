import express from 'express';
const router = express.Router();


router.post('/setName', (req, res) => {
    req.app.locals.playerName = req.body.name;
    res.redirect('/play');
});

router.get('/play', (req, res) => {
    res.render('play', { name: req.app.locals.playerName });
});

export default router;
