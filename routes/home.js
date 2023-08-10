import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home');
});
router.post('/selectMode', (req, res) => {
    const selectedMode = req.body.mode;
    const redirectPath = selectedMode === 'single' ? '/singlePlayer' : '/multiPlayer';
    console.log(`Selected mode: ${req.body.mode}`);
    console.log(`Redirecting to: ${redirectPath}`);

    res.redirect(redirectPath);
});


export default router;

