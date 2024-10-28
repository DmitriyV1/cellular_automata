type TProps = {
  setParameters: ({
    speed,
    active,
  }: {
    speed: number;
    active: boolean;
  }) => void;
  parameters: { speed: number; active: boolean };
};

function Control({ setParameters, parameters }: TProps) {
  const handleActive = () => {
    setParameters({ ...parameters, active: !parameters.active });
  };

  const handleIncreaseSpeed = () => {
    setParameters({ ...parameters, speed: parameters.speed - 100 });
  };

  const handleDecreaseSpeed = () => {
    setParameters({ ...parameters, speed: parameters.speed + 100 });
  };

  return (
    <div className="control">
      <button onClick={handleActive}>
        {parameters.active ? "stop" : "start"}
      </button>
      <button onClick={handleIncreaseSpeed}>+ speed</button>
      <button onClick={handleDecreaseSpeed}>- speed</button>
    </div>
  );
}

export default Control;
