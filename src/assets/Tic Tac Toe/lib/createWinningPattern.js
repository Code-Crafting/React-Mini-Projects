export const createWinningPattern = (num) => {
  const winningPattern = [];

  // row
  for (let i = 0; i < num; i++) {
    const row = [];
    for (let j = 0; j < num; j++) {
      row.push(i * num + j);
    }
    winningPattern.push(row);
  }

  // column
  for (let i = 0; i < num; i++) {
    const column = [];
    for (let j = 0; j < num; j++) {
      column.push(i + j * num);
    }
    winningPattern.push(column);
  }

  // main diagonal
  const mainDiagonal = [];
  for (let i = 0; i < num; i++) {
    mainDiagonal.push(i * (num + 1));
  }
  winningPattern.push(mainDiagonal);

  // anti diagonal
  const antDiagonal = [];
  for (let i = 1; i <= num; i++) {
    antDiagonal.push(i * (num - 1));
  }
  winningPattern.push(antDiagonal);

  return winningPattern;
};
