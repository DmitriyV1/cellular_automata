import countNeighbours from "./countNeighbours";
import { createEmpty2DArray } from "./createArray";

function rules(array: number[][]) {
  const newArr = createEmpty2DArray(30, 30);

  for (let i = 1; i < array.length - 1; i++) {
    for (let j = 1; j < array[i].length - 1; j++) {
      const neighbours = countNeighbours(i, j, array);

      // для чего ты присваиваешь старое значение клетки, если потом независимо от условий будешь его менять?
      newArr[i][j] = array[i][j];

      if (
        (array[i][j] === 1 && neighbours < 2) ||
        (array[i][j] === 1 && neighbours > 3)
      )
        newArr[i][j] = 0;
      else if (array[i][j] === 0 && neighbours === 3) newArr[i][j] = 1;
    }
  }

  return newArr;
}

export default rules;
