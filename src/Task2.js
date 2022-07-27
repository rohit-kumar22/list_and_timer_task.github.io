import React from "react";
import Clock from "./Clock";
import "./Task2.css";
import { useState, useEffect } from "react";
import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";

export default function Task2() {
  const [timerHours, setTimerHours] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(25);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [watch, setWatch] = useState(false);

  // let interval;
  // const startTimer = (cycles) => {
  //   const countDownDate = new Date("Jul 24,2022").getTime();
  //   interval = setInterval(() => {
  //     const now = new Date().getTime();
  //     const distance = countDownDate - now;
  //     const hours = Math.floor(
  //       (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
  //     );
  //     const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
  //     const seconds = Math.floor((distance % (60 * 1000)) / 1000);

  //     if (distance < 0) {
  //       clearInterval(interval.current);
  //     } else {
  //       setTimerHours(hours);
  //       setTimerMinutes(minutes);
  //       setTimerSeconds(seconds);
  //     }
  //   });
  // };

  // useEffect(() => {
  //   startTimer();
  // });

  const setTimer = () => {
    setTimerMinutes(25);
    setWatch(25);
  };

  var timer;
  useEffect(() => {
    if (watch) {
      timer = setInterval(() => {
        setTimerSeconds(timerSeconds - 1);
        console.log({ timerHours });
        console.log({ timerMinutes });
        console.log({ timerSeconds });
        if (timerSeconds === 0) {
          setTimerMinutes(timerMinutes - 1);
          setTimerSeconds(59);
        } else if (timerMinutes === 0 && timerSeconds === 0) {
          setTimerHours(timerHours - 1);
          setTimerMinutes(59);
          setTimerSeconds(59);
        }
        if (timerMinutes === 1 && timerSeconds === 5) {
          hasSelectionSupport();
          // async setTimeout(() => {
          //   console.log("hello");
          // }, 5000);
        }
      }, 1000);
      if (timerHours === 0 && timerMinutes === 0 && timerSeconds === 0) {
        clearInterval(timer);
      }

      return () => clearInterval(timer);
    }
  });

  return (
    <div Task2>
      <div className="task-heading">Task 2</div>
      <div className="timer-container">
        <div className="timer">
          <div className="clock">
            <section>
              <p>{timerHours < 10 ? "0" + timerHours : timerHours}</p>
              <small>Hours</small>
            </section>
            <span>:</span>
            <section>
              <p>{timerMinutes < 10 ? "0" + timerMinutes : timerMinutes}</p>
              <small>Minutes</small>
            </section>
            <span>:</span>
            <section>
              <p>{timerSeconds < 10 ? "0" + timerSeconds : timerSeconds}</p>
              <small>Seconds</small>
            </section>
          </div>
        </div>
      </div>
      <div className="timer-set">
        <select name="cycles" id="cycles">
          <option value="0">Select Cycles</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={() => setWatch(true)}>Start Timer</button>
      </div>
    </div>
  );
}
