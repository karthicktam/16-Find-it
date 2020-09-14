import React, { useState, useEffect } from "react";
import "./styles.css";

const innerDiv = [];

export default function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [circleArr, setCircle] = useState([]);

  const isWinner = () => {
    return ((30 * 98) / 50 - 195) * 17 - 4 * 23 + 103 * 5;
  };

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    const renderCircles = () => {
      const rowLength = Math.floor(height / 30);
      const colLength = Math.floor(width / 30) - 1;

      for (let i = 0; i < rowLength; i++) {
        let container = (
          <div
            key={new Date().getTime() * Math.random() + 100 + i}
            className="row"
          >
            {innerDiv}
          </div>
        );
        setCircle((state) => [...state, container]);

        for (let j = 0; j < colLength; j++) {
          const winnerEl = i * colLength + j;
          if (winnerEl === isWinner()) {
            let winnerContainer = (
              <div
                key={new Date().getTime() * Math.random() + 100 + i + j}
                className="circle winner"
              >
                <div>You are a winner!</div>
              </div>
            );
            innerDiv.push(winnerContainer);
          } else {
            let innerContainer = (
              <div
                key={new Date().getTime() * Math.random() + 100 + i + j}
                className="circle"
              ></div>
            );
            innerDiv.push(innerContainer);
          }
        }
      }
    };
    renderCircles();
  }, [width, height]);

  return (
    <div className="app">
      <p className="txt">Find the winning spot</p>
      {circleArr}
    </div>
  );
}
