function create2DArray(columns: number, rows: number) {
  const arr = new Array(columns);

  for (let i = 0; i < columns; i++) {
    arr[i] = new Array(rows);

    for (let j = 0; j < rows; j++) {
      arr[i][j] = 0;
    }
  }
  return arr;
}

export default create2DArray;
