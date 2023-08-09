import { expect } from 'chai';
import Game from '../src/Game.js';


describe('Game logic', () => {
    let game;

    beforeEach(() => {
        game = new Game('Player1', 'Player2');
    });
    describe('Computer Choice', () => {
        it('should return a valid option', () => {
            const option = game.botOption();
            expect(game.options).to.include(option);
        });
    });
    describe('Result', () => {
        it('should return a valid outcome', () => {
            const outcomes = ['It\'s a draw!', 'You win!', 'You lose!'];
            const result = game.result('rock');
            expect(outcomes).to.include(result.result);
        });
        describe('should determineWinner', () => {
            it('should correctly determine the winner', () => {
                const result = game.determineWinner('rock', 'scissors');
                expect(result).to.equal('You win!');
            });
        });
        describe('should return the multiplayerResult correctly', () => {
            it('should correctly determine the multiplayer result', () => {
                const multiPlay = game.multiplayerResult('rock', 'scissors');
                expect(multiPlay.result).to.equal('Player1 wins!');
                expect(multiPlay.player1Choice).to.equal('rock');
                expect(multiPlay.player2Choice).to.equal('scissors');
            });
        });
    });
});
