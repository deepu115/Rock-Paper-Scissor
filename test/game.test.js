import { expect } from 'chai';
import Game from '../src/Game.js';


describe('Game logic', () => {
    let game;

    beforeEach(() => {
        game = new Game();
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
    });
});
