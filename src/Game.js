import Player from './Player'

class Game {
    constructor(player1Name, player2Name) {
        this.player1 = new Player(player1Name);
        this.player2 = new Player(player2Name);
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

    multiplayerResult() {
        const player1Choice = this.player1.chooseOption();
        const player2Choice = this.player2.chooseOption();
        return {
            result: this.determineWinner(player1Choice, player2Choice), player1Choice: player1Choice, player2Choice: player2Choice
        }
    }
}
export default Game;
