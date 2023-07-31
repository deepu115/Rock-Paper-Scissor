class Player {
    #name
    constructor(name) {
        this.#name = name;
        this.option = null;
    }
    getName() {
        return this.#name;
    }
    chooseOption(option) {
        this.option = option;
    }
    computerOption() {
        const options = ['rock', 'paper', 'scissors'];
        this.option = options[Math.floor(Math.random() * options.length)];

    }
}

module.exports = Player;