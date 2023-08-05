class Game {
    constructor() {
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

}
export default Game;
