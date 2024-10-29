function countNeighbours(i: number, j: number, grid: number[][]) {
  const count =
    grid[i - 1][j - 1] +
    grid[i][j - 1] +
    grid[i + 1][j - 1] +
    grid[i - 1][j] +
    grid[i + 1][j] +
    grid[i - 1][j + 1] +
    grid[i][j + 1] +
    grid[i + 1][j + 1];

  return count;
}

export default countNeighbours;
