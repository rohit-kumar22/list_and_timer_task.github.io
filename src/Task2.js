import React from "react";
import Clock from "./Clock";
import "./Task2.css";
import { useState, useEffect } from "react";

export default function Task2() {
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;
  const startTimer = (cycles) => {
    const countDownDate = new Date("Jul 24,2022").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });

  return (
    <div Task2>
      <div className="task-heading">Task 2</div>
      <Clock
        timerHours={timerHours}
        timerMinutes={timerMinutes}
        TimerSeconds={timerSeconds}
      />
      <select name="cycles" id="cycles">
        <option value="0">Select Cycles</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button onClick={() => startTimer}>Start Timer</button>
    </div>
  );
}
