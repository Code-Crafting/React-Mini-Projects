import { useEffect, useState } from "react";
import { createWinningPattern } from "../lib/createWinningPattern";
import { createBoard } from "../lib/createBoard";

export const useTicTacToe = () => {
  const [gridNum, setGridNum] = useState(3);
  const [board, setBoard] = useState(createBoard(gridNum));
  const [isX, setIsX] = useState(true);

  // creating new board with the new board size
  useEffect(() => {
    setBoard(createBoard(gridNum));
  }, [gridNum]);

  const winningPattern = createWinningPattern(gridNum);

  const handleInput = (e) => {
    if (e.code === "Enter" && e.target.value < 3) {
      alert("Board size cann't be less than 3");
      return;
    }
    if (e.code === "Enter") {
      setGridNum(Number(e.target.value));
    }
  };

  const checkWinner = () => {
    for (let i = 0; i < winningPattern.length; i++) {
      let pattern = [];
      for (let j = 0; j < winningPattern[i].length; j++) {
        pattern.push(board[winningPattern[i][j]]);
      }
      if (pattern.every((el) => el === "X")) {
        return "X";
      }

      if (pattern.every((el) => el === "O")) {
        return "O";
      }
    }
    return null;
  };

  const getMsg = () => {
    const hasAnyoneWon = checkWinner();

    if (hasAnyoneWon) {
      return `Player ${hasAnyoneWon} won`;
    }
    if (!board.includes(null) && !hasAnyoneWon) {
      return "It's a draw";
    }
    if (!hasAnyoneWon) {
      return `Player ${isX ? "X" : "O"}'s turn!`;
    }
  };

  const handleReset = () => {
    if (board.every((el) => el === null)) return;
    const newBoard = createBoard(gridNum);
    setBoard(newBoard);
    setIsX(true);
  };

  const handleClick = (index) => {
    const hasAnyoneWon = checkWinner();
    if (hasAnyoneWon) return;

    const newBoard = [...board];
    newBoard[index] = isX ? "X" : "O";
    setBoard(newBoard);
    setIsX(!isX);
  };

  return [handleInput, getMsg, handleReset, handleClick, board, gridNum];
};
