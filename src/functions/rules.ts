import countNeighbours from "./countNeighbours";
import create2DArray from "./create2DArray";

function rules(array: number[][]) {
  const newArr = create2DArray(30, 30);

  for (let i = 1; i < array.length - 1; i++) {
    for (let j = 1; j < array[i].length - 1; j++) {
      const neighbours = countNeighbours(i, j, array);
      if (array[i][j] === 1 && neighbours < 2) newArr[i][j] = 0;
      else if (array[i][j] === 1 && neighbours > 3) newArr[i][j] = 0;
      else if (array[i][j] === 0 && neighbours === 3) newArr[i][j] = 1;
      else newArr[i][j] = array[i][j];
    }
  }

  return newArr;
}

export default rules;
