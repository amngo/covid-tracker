import { useRequest } from 'hooks';
import React from 'react';

const Stats: React.FC = (): JSX.Element => {
  const { data, isLoading }: { data: any; isLoading: boolean } = useRequest(
    'https://disease.sh/v3/covid-19/all',
  );

  return !isLoading ? (
    <div className="flex flex-col items-center my-12 lg:flex-row lg:justify-around xl:my-0">
      <div className="flex flex-col p-4 mb-2 bg-zinc-700 w-[300px] lg:w-[350px] xl:w-[250px] 2xl:w-[350px]">
        <h2 className="uppercase">Cases</h2>
        <div className={'text-2xl text-sky-500'}>
          {(data.cases - data.todayCases).toLocaleString()}
        </div>
        <div className={'text-sm'}>
          +{data.todayCases.toLocaleString()}{' '}
          <span className="text-xs">today</span>
        </div>
      </div>
      <div className="flex flex-col p-4 mb-2 bg-zinc-700 w-[300px] lg:w-[350px] xl:w-[250px] 2xl:w-[350px]">
        <h2 className="uppercase">Recovered</h2>
        <div className={'text-2xl text-green-500'}>
          {(data.recovered - data.todayRecovered).toLocaleString()}
        </div>
        <div className={'text-sm'}>
          +{data.todayRecovered.toLocaleString()}{' '}
          <span className="text-xs">today</span>
        </div>
      </div>
      <div className="flex flex-col p-4 bg-zinc-700 w-[300px] lg:w-[350px] xl:w-[250px] mb-2 2xl:w-[350px]">
        <h2 className="uppercase">Deaths</h2>
        <div className={'text-2xl text-red-600'}>
          {(data.deaths - data.todayDeaths).toLocaleString()}
        </div>
        <div className={'text-sm'}>
          +{data.todayDeaths.toLocaleString()}{' '}
          <span className="text-xs">today</span>
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default Stats;
