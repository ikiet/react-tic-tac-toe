import { useState } from "react";

export default function Player({ initialName, symbol, onNameSubmit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);
  function handleClick() {
    setIsEditing((state) => !state);
    if (isEditing) {
      onNameSubmit(playerName);
    }
  }

  function onNameChange(e) {
    setPlayerName(e.target.value);
  }

  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            required
            value={playerName}
            onChange={(e) => onNameChange(e)}
          />
        ) : (
          <span className="player-name">{initialName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
