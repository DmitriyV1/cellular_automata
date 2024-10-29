import { createRandom2DArray } from "../functions/createArray";

type TProps = {
  iteration: number;
  parameters: { speed: number; active: boolean };
  setArray: (newArray: number[][]) => void;
  setParameters: ({
    speed,
    active,
  }: {
    speed: number;
    active: boolean;
  }) => void;
  setIteration: React.Dispatch<React.SetStateAction<number>>;
};

function Control({
  setParameters,
  parameters,
  setArray,
  iteration,
  setIteration,
}: TProps) {
  const handleActive = () => {
    setParameters({ ...parameters, active: !parameters.active });
  };

  const handleIncreaseSpeed = () => {
    setParameters({ ...parameters, speed: parameters.speed - 100 });
  };

  const handleDecreaseSpeed = () => {
    setParameters({ ...parameters, speed: parameters.speed + 100 });
  };

  const handleReset = () => {
    setArray(createRandom2DArray(30, 30));
    setIteration(0);
  };

  return (
    <div className="control">
      <button onClick={handleActive}>
        {parameters.active ? "stop" : "start"}
      </button>
      <button onClick={handleIncreaseSpeed}>+ speed</button>
      <button onClick={handleDecreaseSpeed}>- speed</button>
      <button onClick={handleReset}>reset</button>
      <h2>Iteration: {iteration}</h2>
    </div>
  );
}

export default Control;
