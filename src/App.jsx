import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import { useState } from "react";
function App() {
  const [player1Name, setPlayer1Name] = useState("Player1");
  const [player2Name, setPlayer2Name] = useState("Player2");
  return (
    <main>
      <div id="game-container">
        <ol id="player">
          <Player
            initialName={player1Name}
            symbol="X"
            onNameSubmit={setPlayer1Name}
          />
          <Player
            initialName={player2Name}
            symbol="O"
            onNameSubmit={setPlayer2Name}
          />
        </ol>
        <GameBoard />
      </div>
      LOG
    </main>
  );
}

export default App;
