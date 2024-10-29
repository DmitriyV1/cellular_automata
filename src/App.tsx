import { useState } from "react";
import Canvas from "./components/Canvas";
import Control from "./components/Control";
import { createRandom2DArray } from "./functions/createArray";

function App() {
  const [parameters, setParameters] = useState({
    speed: 1000,
    active: true,
  });
  const [array, setArray] = useState<number[][]>(createRandom2DArray(30, 30));
  const [iteration, setIteration] = useState(0);

  return (
    <div className="app">
      <Canvas
        parameters={parameters}
        array={array}
        setArray={setArray}
        setIteration={setIteration}
      />
      <Control
        setParameters={setParameters}
        parameters={parameters}
        setArray={setArray}
        iteration={iteration}
        setIteration={setIteration}
      />
    </div>
  );
}

export default App;
