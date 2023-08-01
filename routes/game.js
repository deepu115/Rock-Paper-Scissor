const express = require('express');
const router = express.Router();
const Game = require('../src/Game.js');
const Player = require('../src/Player.js');

// Create a new game with a human player and a computer player
const player1 = new Player('Player1');
const player2 = new Player('Computer');
const game = new Game(player1, player2);

router.get('/', (req, res) => {

    const playerName = req.session ? req.session.playerName : 'Player 1';

    res.render('game', { playerName });
});

router.post('/', (req, res) => {

    const playerOption = req.body.option;
    player1.chooseOption(playerOption);
    game.play();

    res.redirect('/result');
});

module.exports = router;