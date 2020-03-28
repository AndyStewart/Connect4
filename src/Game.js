
class Game {
    get grid() {
        return this._grid;
    }
    constructor () {
        this._grid = [];
    }

    initialise() {
        for (var y = 0; y < 6; y++) {
            for (var x = 0; x < 7; x++) {
                this._grid.push({x, y});
            }
        }
    }
}

export default Game;