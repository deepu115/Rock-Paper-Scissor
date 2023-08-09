import Player from './Player.js';

class Game {
    constructor(player1Name, player2Name) {
        this.player1Name = player1Name;
        this.player2Name = player2Name;
        this.options = ['rock', 'paper', 'scissors'];
        this.results = {
            'rock': { 'rock': 'It\'s a draw!', 'paper': 'You lose!', 'scissors': 'You win!' },
            'paper': { 'rock': 'You win!', 'paper': 'It\'s a draw!', 'scissors': 'You lose!' },
            'scissors': { 'rock': 'You lose!', 'paper': 'You win!', 'scissors': 'It\'s a draw!' }
        };
    }
    botOption() {
        return this.options[Math.floor(Math.random() * this.options.length)];
    }
    result(playerChoice) {
        const computerChoice = this.botOption();
        return {
            result: this.results[playerChoice][computerChoice],
            computerChoice: computerChoice
        }
    }
    determineWinner(choice1, choice2) {
        return this.results[choice1][choice2];
    }

    multiplayerResult(player1Choice, player2Choice) {
        const winner = this.determineWinner(player1Choice, player2Choice);
        const result = winner.includes('win') ? `${this.player1Name} wins!` :
            winner.includes('lose') ? `${this.player2Name} wins!` :
                "It's a draw!";
        return {
            result: result, player1Choice: player1Choice, player2Choice: player2Choice
        }
    }
}
export default Game;

