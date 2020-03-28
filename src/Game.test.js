import Game from './Game';

test('Player Red turn is first',  () => {
    var game = new Game();
    expect(game.currentTurn).toBe('Red');
});

test('Player Red places coin in col 0', () => {
    var game = new Game();
    game.select(0);
    expect(game.find(0, 0).color).toBe('Red');
});

test('Player Blue goes after player Red', () => {
    var game = new Game();
    game.select(0);
    expect(game.currentTurn).toBe('Blue');
});

test('Play returns to Red player after blue player', () => {
    var game = new Game();
    game.select(0);
    game.select(0);
    expect(game.currentTurn).toBe('Red');
});

test('Position is blue when Blue player places coin', () => {
    var game = new Game();
    game.select(0);
    game.select(1);
    expect(game.find(1, 0).color).toBe('Blue');
});

test('Placing in column containing cell places coin ontop of that coin,', () => {
    var game = new Game();
    game.select(0);
    game.select(0);
    expect(game.find(0, 1).color).toBe('Blue');
})
