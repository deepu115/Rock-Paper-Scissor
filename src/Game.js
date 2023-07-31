class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }
    play() {
        const rules = { 'rock': 'scissors', 'paper': 'rock', 'scissors': 'paper' };
        this.winner = rules[this.player1.option] === this.player2.option ? this.player1 : this.player2;
    }
}


module.exports = Game;