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

}

module.exports = Player;