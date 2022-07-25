import React from "react";

export default function Clock({ timerHours, timerMinutes, timerSeconds }) {
  return (
    <div className="timer-container">
      <div className="timer">
        <div className="clock">
          <section>
            <p>{timerHours}</p>
            <small>Hours</small>
          </section>
          <span>:</span>
          <section>
            <p>{timerMinutes}</p>
            <small>Minutes</small>
          </section>
          <span>:</span>
          <section>
            <p>{timerSeconds}</p>
            <small>Seconds</small>
          </section>
        </div>
      </div>
    </div>
  );
}

Clock.defaultProps = {
  timerHours: 10,
  timerMinutes: 10,
  timerSeconds: 10,
};
