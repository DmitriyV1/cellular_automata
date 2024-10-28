import { useState } from "react";
import Canvas from "./components/Canvas";
import Control from "./components/Control";
import createReandom2DArray from "./functions/createRandom2DArray";

function App() {
  const [parameters, setParameters] = useState({ speed: 1000, active: true });
  const [array, setArray] = useState<number[][]>(createReandom2DArray(30, 30));

  return (
    <div className="app">
      <Canvas parameters={parameters} array={array} setArray={setArray} />
      <Control setParameters={setParameters} parameters={parameters} />
    </div>
  );
}

export default App;
