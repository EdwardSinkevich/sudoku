module.exports = function solveSudoku(matrix) {
  function rowCheck (row, num) {
    for (let i = 0; i < 9; i++){
      if (matrix[row][i] == num) {
        return true;
      }
    }
    return false;
  }
  function colCheck(col, num) {
    for (let i = 0; i < 9; i++){
      if (matrix[i][col] == num) {
        return true;
      }
    }
    return false;
  }
  function boxCheck (row, col, num) {
    let r = row - row % 3;
    let c = col - col % 3;
    for (let i = r; i < r + 3; i++){
      for (let j = c; j < c + 3; j++){
        if (matrix[i][j] == num) {
          return true;
        }
      }
    }
    return false;
  }
  function check (row, col, num) {
    if (rowCheck(row, num) || colCheck(col, num) || boxCheck (row, col, num)) {
      return false;
    }
    else {
      return true;
    }
  }
  this.matrix = matrix;
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (matrix[row][col] === 0) {
        for (let num = 1; num <= 9; num++){
          if (check(row, col, num)) {
            matrix[row][col] = num;
            if (solveSudoku(matrix))  {
              return matrix;
            }
            else {
              matrix[row][col] = 0;
            }
          }
        }
        return false;
      }
    }
  }
  return matrix;
}
