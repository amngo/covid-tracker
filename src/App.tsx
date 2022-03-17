import Cases from 'components/Cases';
import Graph from 'components/Graph';
import Header from 'components/Header';
import { Loader } from 'components/Loader';
import Stats from 'components/Stats';
import Timeframe from 'components/Timeframe';
import { AppCtx } from 'context';
import { useRequest } from 'hooks';
import { Country } from 'models';
import moment from 'moment';
import React, { useContext, useEffect } from 'react';
import { parseData, sortData } from 'utils';

const App: React.FC = (): JSX.Element => {
  const { setCountries } = useContext(AppCtx);
  const currentDate: string = moment().subtract(1, 'days').format('M/D/YY');
  const { data, isLoading }: { data: any; isLoading: boolean } = useRequest(
    'https://disease.sh/v3/covid-19/historical?lastdays=all',
  );

  useEffect(() => {
    if (data && !isLoading) {
      const parsedData: Country[] = parseData(data);
      const sortedData: Country[] = sortData(currentDate, 'cases', parsedData);
      setCountries(sortedData);
    }
  }, [data, currentDate, isLoading, setCountries]);

  return !isLoading ? (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-col h-full min-h-0 m-8 xl:flex-row">
        <Cases />
        <div className="flex flex-col xl:justify-between xl:w-full">
          <Stats />
          <Graph />
          <Timeframe />
        </div>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center h-screen bg-zinc-800">
      <Loader />
    </div>
  );
};

export default App;
