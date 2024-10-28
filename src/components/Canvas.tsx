import { useEffect, useRef } from "react";

import rules from "../functions/rules";

type TProps = {
  array: number[][];
  parameters: { speed: number; active: boolean };
  setArray: (newArray: number[][]) => void;
};

const Canvas = ({ parameters, array, setArray }: TProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { speed, active } = parameters;

  useEffect(() => {
    if (canvasRef.current === null) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (ctx === null) return;

    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
        if (!active) return;

        if (array[i][j] !== 0) {
          ctx.fillStyle = "grey";
          ctx.fillRect(j * 25, i * 25, 25, 25);
        } else {
          ctx.fillStyle = "white";
          ctx.fillRect(j * 25, i * 25, 25, 25);
        }
        ctx.strokeRect(j * 25, i * 25, 25, 25);
      }
    }

    const interval = setInterval(() => {
      setArray(rules(array));
    }, speed);

    return () => clearInterval(interval);
  }, [array, speed, active, setArray]);

  return <canvas className="canvas" ref={canvasRef} width={900} height={900} />;
};

export default Canvas;
