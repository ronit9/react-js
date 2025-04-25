// src/GameBoard.js
import React, { useState, useEffect, useRef } from 'react';

const GameBoard = () => {
  const canvasRef = useRef(null);
  const [snake, setSnake] = useState([{ x: 50, y: 50 }]);
  const [direction, setDirection] = useState("RIGHT");
  const [food, setFood] = useState({ x: 80, y: 80 });
  const [score, setScore] = useState(0);

  const moveSnake = () => {
    const newSnake = [...snake];
    const head = { ...newSnake[0] };

    if (direction === "RIGHT") head.x += 10;
    if (direction === "LEFT") head.x -= 10;
    if (direction === "UP") head.y -= 10;
    if (direction === "DOWN") head.y += 10;

    newSnake.unshift(head);

    // Check for food collision
    if (head.x === food.x && head.y === food.y) {
      setFood({ x: Math.floor(Math.random() * 20) * 10, y: Math.floor(Math.random() * 20) * 10 });
      setScore(score + 5);
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  };

  const gameOver = () => {
    const head = snake[0];
    if (
      head.x < 0 || head.x >= 700 || 
      head.y < 0 || head.y >= 700 || 
      snake.some((segment, index) => index !== 0 && segment.x === head.x && segment.y === head.y)
    ) {
      alert("Game Over");
      setSnake([{ x: 50, y: 50 }]);
      setDirection("RIGHT");
      setScore(0);
    }
  };

  const drawGame = () => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, 700, 700); // Clear the canvas

    // Draw snake
    snake.forEach((segment) => {
      ctx.fillStyle = "#00FF00";
      ctx.fillRect(segment.x, segment.y, 10, 10);
    });

    // Draw food
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(food.x, food.y, 10, 10);

    // Draw score
    ctx.fillStyle = "#000000";
    ctx.font = "20px Arial";
    ctx.fillText(`Score: ${score}`, 10, 20);
  };

  // Set game loop
  useEffect(() => {
    const intervalId = setInterval(() => {
      moveSnake();
      gameOver();
    }, 700);
    return () => clearInterval(intervalId); // Cleanup the interval when component unmounts
  }, [snake, direction, food]);

  useEffect(() => {
    drawGame();
  }, [snake, food, score]);

  // Handle key press to change direction
  const handleKeyPress = (e) => {
    if (e.key === "ArrowUp" && direction !== "DOWN") setDirection("UP");
    if (e.key === "ArrowDown" && direction !== "UP") setDirection("DOWN");
    if (e.key === "ArrowLeft" && direction !== "RIGHT") setDirection("LEFT");
    if (e.key === "ArrowRight" && direction !== "LEFT") setDirection("RIGHT");
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [direction]);

  return (
    <div>
      <canvas ref={canvasRef} width={700} height={700}></canvas>
      <div>Score: {score}</div>
    </div>
  );
};

export default GameBoard;
