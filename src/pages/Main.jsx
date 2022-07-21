import { useState, useEffect, useContext } from "react";
import { getMetricsData, getTime } from "../api";
import { epochTime, formatTime } from "../utils/time";
import ClipLoader from "react-spinners/ClipLoader";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./Main.css";
import { AppContext } from "../context/AppContext";

function Main() {
  const {
    serverTime,
    clientTime,
    setClientTime,
    promethusData,
    isLoadingLeft,
    isLoadingRight,
    getSetServerTime,
    getSetPromethusData,
    timeToRefresh,
    setTimeToRefresh,
  } = useContext(AppContext);

  const updateValue =
    timeToRefresh === 45 ? 45000 : timeToRefresh === 30 ? 30000 : 15000;

  useEffect(() => {
    const interval = setInterval(() => {
      setClientTime(epochTime());
    }, 1000);

    // clear memory leak
    return () => {
      clearInterval(interval);
    };
  }, [timeToRefresh]);

  useEffect(() => {
    const interval = setInterval(() => {
      getSetServerTime();
      getSetPromethusData();
    }, updateValue);

    // clear memory leak
    return () => {
      clearInterval(interval);
    };
  }, [timeToRefresh]);

  useEffect(() => {
    getSetServerTime();
    getSetPromethusData();
  }, [timeToRefresh]);

  if (!clientTime && !serverTime) {
    return null;
  }

  return (
    <div className="app__container">
      <div className="app__container__left-section">
        {isLoadingLeft ? (
          <ClipLoader color="#000" loading={isLoadingLeft} size={8} />
        ) : (
          <div className="app__container__left__info">
            <div className="app__container__left__epoch">
              Epoch: {serverTime}
            </div>

            {/* <div className="app__container__left__diff">
              Diff: {formatTime(clientTime - serverTime)}
            </div> */}
            <div className="app__container__left__diff">
              Diff: {formatTime(clientTime - serverTime)}
            </div>
          </div>
        )}
      </div>

      <div className="app__container__right-section">
        {isLoadingRight ? (
          <ClipLoader color="#000" loading={isLoadingRight} size={8} />
        ) : (
          <>
            <pre className="app__container__right-section__code">
              <code>{promethusData}</code>
            </pre>
          </>
        )}
      </div>
    </div>
  );
}

export default Main;
