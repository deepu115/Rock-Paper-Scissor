const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game.js');
const Player = require('../src/Player.js');

describe('Game', function () {
    let game;
    let player1;
    let player2;

    beforeEach(function () {
        player1 = new Player('Player1');
        player2 = new Player('Computer');
        game = new Game(player1, player2);
    });

    it('should have two players', function () {
        expect(game.player1).to.equal(player1);
        expect(game.player2).to.equal(player2);
    });
    it('should allow a player to make a move', function () {
        player1.chooseOption('rock');
        expect(player1.option).to.equal('rock');
    });



});
