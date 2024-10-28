function countNeighbours(i: number, j: number, grid: number[][]) {
  let count = 0;

  if (grid[i - 1][j - 1] === 1) count++;
  if (grid[i][j - 1] === 1) count++;
  if (grid[i + 1][j - 1] === 1) count++;

  if (grid[i - 1][j] === 1) count++;
  if (grid[i + 1][j] === 1) count++;

  if (grid[i - 1][j + 1] === 1) count++;
  if (grid[i][j + 1] === 1) count++;
  if (grid[i + 1][j + 1] === 1) count++;

  return count;
}

export default countNeighbours;
