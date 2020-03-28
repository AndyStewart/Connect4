import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import Game from './Game';

function Cell({cell}) {
  return <td key={`cell_${cell.x}_${cell.y}`}
  onClick={() => console.log(`clicked cell_${cell.x}_${cell.y}`)}></td>;
}

function Row({cells}) {
  return <tr>{cells.map(cell => <Cell key={`cell_${cell.x}_${cell.y}`} cell={cell} />)}</tr>;
}

const game = new Game();
game.initialise();

const App = () => {
  const grid = game.grid;  
  const rows = grid.filter(pos => pos.x == 0)
                   .map(row => grid.filter(cell => cell.y == row.y));

  return (
    <div className="App">
      <header className="App-header">
          Connect 4
      </header>
      <table data-testid="playing-grid">
        <tbody>
          {rows.map((row, i) => <Row key={`row_${i}`} cells={row} />)}
        </tbody>
      </table>
    </div>
  );
}

export default App;
