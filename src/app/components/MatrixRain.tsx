"use client";

import { useEffect, useRef } from "react";

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const W = window.innerWidth;
    const H = window.innerHeight;
    const fontSize = 16;
    const columns = Math.floor(W / fontSize);
    const drops = new Array(columns).fill(0);
    const str = "javascript html5 canvas";

    canvas.width = W;
    canvas.height = H;

    const draw = () => {
      context.fillStyle = "rgba(0, 0, 0, 0.05)";
      context.fillRect(0, 0, W, H);
      context.font = `700 ${fontSize}px 微软雅黑`;
      context.fillStyle = "#00cc33";

      for (let i = 0; i < columns; i++) {
        const index = Math.floor(Math.random() * str.length);
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        context.fillText(str[index], x, y);

        if (y >= canvas.height && Math.random() > 0.99) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 30);
    return () => clearInterval(interval);
  }, []);

  return (
	<canvas
	  ref={canvasRef}
	  style={{
		background: "transparent", // 背景設為透明
		display: "block",
		width: "100%",
		height: "100%",
	  }}
	/>
  );
};

export default MatrixRain;

