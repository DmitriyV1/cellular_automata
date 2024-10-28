import { useEffect, useRef, useState } from "react";
import create2DArray from "../functions/create2DArray";
import rules from "../functions/rules";

const Canvas = ({
  parameters,
  array,
}: {
  array: number[][];
  parameters: { speed: number; active: boolean };
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { speed, active } = parameters;

  useEffect(() => {
    // Дефолтный эффект, срабатывающий в самом начале. Отрисовывает первичные данные.
    if (canvasRef.current === null) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (ctx === null) return;

    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
        array[i][j] = Math.floor(Math.random() * 2);

        // Задержка отрисовки
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

    // Следующая итерация
  }, [array]);

  return <canvas className="canvas" ref={canvasRef} width={900} height={900} />;
};

export default Canvas;
