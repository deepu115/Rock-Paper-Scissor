import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home');
});
router.post('/selectMode', (req, res) => {
    const selectedMode = req.body.mode;
    const redirectPath = selectedMode === 'single' ? '/singlePlayer' : '/multiPlayer';
    res.redirect(redirectPath);
});


export default router;

