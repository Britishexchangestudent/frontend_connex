import React from "react";
import { useState } from "react";
import { getMetricsData, getTime } from "../api";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [serverTime, setServerTime] = useState(null);

  const [clientTime, setClientTime] = useState(null);

  const [promethusData, setPromothusData] = useState("");

  const [isLoadingLeft, setIsLoadingLeft] = useState(true);

  const [isLoadingRight, setIsLoadingRight] = useState(true);

  const [timeToRefresh, setTimeToRefresh] = useState(30);

  async function getSetServerTime() {
    setIsLoadingLeft(true);
    const st = await getTime();
    console.log("st is", st);
    setServerTime(st.epoch);
    setIsLoadingLeft(false);
  }

  async function getSetPromethusData() {
    setIsLoadingRight(true);
    const st = await getMetricsData();
    console.log("pt is", st);
    setPromothusData(st);
    setIsLoadingRight(false);
  }
  return (
    <AppContext.Provider
      value={{
        serverTime,
        setServerTime,
        clientTime,
        setClientTime,
        promethusData,
        setPromothusData,
        isLoadingLeft,
        setIsLoadingLeft,
        isLoadingRight,
        setIsLoadingRight,
        getSetServerTime,
        getSetPromethusData,
        timeToRefresh,
        setTimeToRefresh,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
