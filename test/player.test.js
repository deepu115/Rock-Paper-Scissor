const chai = require('chai');
const { beforeEach } = require('mocha');
const expect = chai.expect;
const Player = require('../src/Player.js');

describe('Player', function () {
    let player;
    beforeEach(function () {
        player = new Player('Player 1');
    });
    it('Should return player name', function () {
        expect(player.getName()).to.equal('Player 1');
    });
});