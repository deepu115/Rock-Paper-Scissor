class Player {
    constructor(name) {
        this.name = name;
        this.option = null;
    }
    chooseOption(option) {
        this.option = option;
    }
}
export default Player;