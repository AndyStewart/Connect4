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

test('Player Yellow goes after player Red', () => {
    var game = new Game();
    game.select(0);
    expect(game.currentTurn).toBe('Yellow');
});

test('Play returns to Red player after Yellow player', () => {
    var game = new Game();
    game.select(0);
    game.select(0);
    expect(game.currentTurn).toBe('Red');
});

test('Position is Yellow when Yellow player places coin', () => {
    var game = new Game();
    game.select(0);
    game.select(1);
    expect(game.find(1, 0).color).toBe('Yellow');
});

test('Placing in column containing cell places coin ontop of that coin,', () => {
    var game = new Game();
    game.select(0);
    game.select(0);
    expect(game.find(0, 1).color).toBe('Yellow');
})


test('Game doesnt change turn for invalid move', () => {
    var game = new Game();
    game.select(0);
    game.select(0);
    game.select(0);
    game.select(0);
    game.select(0);
    game.select(0);
    game.select(0);
    expect(game.currentTurn).toBe('Red');
});

