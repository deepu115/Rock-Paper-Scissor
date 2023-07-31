const chai = require('chai');
const { beforeEach } = require('mocha');
const expect = chai.expect;

describe('Player', function () {
    let player;
    beforeEach(function () {
        player = new Player('Player 1');
    });
    it('Should return player name', function () {
        expect(player.name).to.equal('Player1');
    });
});