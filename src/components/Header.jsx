import React, { useContext, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { AppContext } from "../context/AppContext";
import "./Header.css";

function Header() {
  const { timeToRefresh, setTimeToRefresh } = useContext(AppContext);
  const [key, setKey] = useState(0);
  return (
    <header>
      <div className="header__left">LOGO</div>

      <div className="header__right">
        <button
          className={`header__btn ${timeToRefresh === 15 && "active__btn"}`}
          onClick={() => {
            if (timeToRefresh !== 15) {
              setTimeToRefresh(15);
              setKey((prevKey) => prevKey + 1);
            }
          }}
        >
          15 Seconds
        </button>
        <button
          className={`header__btn ${timeToRefresh === 30 && "active__btn"}`}
          onClick={() => {
            if (timeToRefresh !== 30) {
              setTimeToRefresh(30);
              setKey((prevKey) => prevKey + 1);
            }
          }}
        >
          30 Seconds
        </button>
        <button
          className={`header__btn ${timeToRefresh === 45 && "active__btn"}`}
          onClick={() => {
            if (timeToRefresh !== 45) {
              setTimeToRefresh(45);
              setKey((prevKey) => prevKey + 1);
            }
          }}
        >
          45 Seconds
        </button>
        <CountdownCircleTimer
          key={key}
          isPlaying
          size={50}
          strokeWidth={5}
          duration={timeToRefresh}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[7, 5, 2, 0]}
          onComplete={() => {
            return { shouldRepeat: true };
          }}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      </div>
    </header>
  );
}

export default Header;
