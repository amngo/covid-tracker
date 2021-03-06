import Cases from "components/Cases";
import Graph from "components/Graph";
import Header from "components/Header";
import Loader from "components/Loader/Loader";
import Stats from "components/Stats";
import Timeframe from "components/Timeframe";
import { AppCtx } from "context";
import dayjs from "dayjs";
import useRequest from "hooks";
import React, { useContext, useEffect } from "react";
import { parseData, sortData } from "utils";
import { API_ENDPOINT } from "./constants";

function App() {
  const { setCountries } = useContext(AppCtx);
  const currentDate = dayjs().subtract(1, "days").format("M/D/YY");
  const { data, isLoading }: { data: any; isLoading: boolean } =
    useRequest(API_ENDPOINT);

  useEffect(() => {
    if (data && !isLoading) {
      const parsedData = parseData(data);
      const sortedData = sortData(currentDate, "cases", parsedData);
      setCountries(sortedData);
    }
  }, [data, currentDate, isLoading, setCountries]);

  return !isLoading ? (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-col h-full min-h-0 m-8 space-y-8 xl:flex-row">
        <Cases />
        <div className="flex flex-col space-y-8 xl:justify-between xl:w-full">
          <Stats />
          <Graph />
          <Timeframe />
        </div>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center h-screen">
      <Loader />
    </div>
  );
}

export default App;
