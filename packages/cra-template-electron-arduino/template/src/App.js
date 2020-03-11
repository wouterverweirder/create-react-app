import React, { useState } from 'react';
import './App.css';

import { useBoard } from './hooks/useBoard';

function App() {

  const board = useBoard();
  const [isBoardReady, setIsBoardReady] = useState(board.isReady);
  
  board.on('ready', () => {
    setIsBoardReady(board.isReady);
  });

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Board Status {isBoardReady ? 'ready' : 'not ready'}
        </p>
      </header>
    </div>
  );
}

export default App;
