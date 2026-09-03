function isValid(board, row, col, num) {
  const char = String(num);

  for (let i = 0; i < 9; i++) {
    if (board[row][i] === char) return false;
    if (board[i][col] === char) return false;
  }

  const boxRow = Math.floor(row / 3) * 3;
  const boxCol = Math.floor(col / 3) * 3;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[boxRow + i][boxCol + j] === char) return false;
    }
  }

  return true;
}

function solveSudoku(board) {
  function backtrack() {
    
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] === '.') {
          
          for (let num = 1; num <= 9; num++) {
            if (isValid(board, row, col, num)) {
              board[row][col] = String(num); 

              if (backtrack()) return true; 

              board[row][col] = '.'; 
            }
          }
          return false; 
        }
      }
    }
    return true; 
  }

  backtrack();
}

const board = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
];

console.log("Original Board:");
console.table(board);

solveSudoku(board);

console.log("\nSolved Board:");
console.table(board);