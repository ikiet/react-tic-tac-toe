import { useState } from "react";

export default function GameBoard() {
  const [board, setBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  const handleCellClick = (rowIndex, cellIndex) => {
    setBoard((prevBoard) => {
      const newValue = [...prevBoard.map((innerArray) => [...innerArray])];
      newValue[rowIndex][cellIndex] = "X";
      return newValue;
    });
  };

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((cell, cellIndex) => {
                return (
                  <li key={cellIndex}>
                    <button
                      type="button"
                      onClick={() => handleCellClick(rowIndex, cellIndex)}
                    >
                      {cell}
                    </button>
                  </li>
                );
              })}
            </ol>
          </li>
        );
      })}
    </ol>
  );
}
