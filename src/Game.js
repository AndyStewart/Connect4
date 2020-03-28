
class Game {
    constructor () {
        this.players = ['Red', 'Blue'];
        this.turn = 0;
        this.initialise();
    }

    get grid() {
        return this._grid;
    }

    get currentTurn() {
        return this.players[this.turn];
    }

    find(x, y) {
        return this._grid.find(pos => pos.x === x && pos.y === y)
    }

    select(column) {
        var availableColumn = this.grid.find(pos => pos.x === column && pos.color === undefined);
        const selectedPosition = availableColumn;
        selectedPosition.color = this.currentTurn;
        this.turn++;
        if (this.turn >= this.players.length) {
            this.turn = 0;
        }
    }

    initialise() {
        this._grid = [];
        for (var y = 0; y < 6; y++) {
            for (var x = 0; x < 7; x++) {
                this._grid.push({x, y});
            }
        }
    }
}

export default Game;