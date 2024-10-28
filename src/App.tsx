import { useEffect, useState } from "react";
import Canvas from "./components/Canvas";
import Control from "./components/Control";
import create2DArray from "./functions/create2DArray";
import rules from "./functions/rules";

function App() {
  const [parameters, setParameters] = useState({ speed: 500, active: true });
  const [array, setArray] = useState<number[][]>(create2DArray(30, 30));

  useEffect(() => {
    const interval = setInterval(() => {
      setArray(rules(array));
      console.log("done");
    }, 2000);
    return () => clearInterval(interval);
  }, [array]);
  return (
    <div className="app">
      <Canvas parameters={parameters} array={array} />
      <Control setParameters={setParameters} parameters={parameters} />
    </div>
  );
}

export default App;
