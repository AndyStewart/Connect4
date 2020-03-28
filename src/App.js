import React, {useState} from 'react';
import './App.css';

import Game from './Game';


function Cell({cell, onCellClicked}) {
  return <td key={`cell_${cell.x}_${cell.y}`}
  className={`cell_${cell.color}`}
  onClick={() => onCellClicked(cell)}></td>;
}

function Row({cells, onCellClicked}) {
  return <tr>{cells.map(cell => <Cell key={`cell_${cell.x}_${cell.y}`} cell={cell} onCellClicked={onCellClicked} />)}</tr>;
}

var game = new Game();
const App = () => {
  const [grid, setGrid] = useState(game.grid, [game.currentTurn]);
  const rows = grid.filter(pos => pos.x == 0)
                   .sort((lPos, rPos) => lPos.y > rPos.y ? -1 : 1)
                   .map(row => grid.filter(cell => cell.y == row.y));
  return (
    <div className="App">
      <header className="App-header">
          <h1>Connect 4 - Current turn: {game.currentTurn}</h1>
      </header>
      <table data-testid="playing-grid">
        <tbody>
          {rows.map((row, i) => <Row key={`row_${i}`} cells={row} onCellClicked={cell => {
            game.select(cell.x);
            setGrid(game.grid.map(x => ({...x})));
          }} />)}
        </tbody>
      </table>
    </div>
  );
}

export default App;
