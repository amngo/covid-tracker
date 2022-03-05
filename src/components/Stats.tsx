import { useRequest } from 'hooks';
import React from 'react';

const Stats: React.FC = (): JSX.Element => {
  const { data, isLoading }: { data: any; isLoading: boolean } = useRequest(
    'https://disease.sh/v3/covid-19/all'
  );

  return !isLoading ? (
    <div className='flex flex-col items-center mb-12 xl:flex-row xl:justify-around xl:mb-0'>
      <div className='flex flex-col p-4 mb-2 bg-zinc-700 w-[450px] xl:w-[400px] xl:m-0 rounded-xl'>
        <h2 className='uppercase'>Cases</h2>
        <div className={'text-4xl text-sky-500'}>
          {(data.cases - data.todayCases).toLocaleString()}
        </div>
        <div className={'text-sm'}>
          +{data.todayCases.toLocaleString()}{' '}
          <span className='text-xs'>today</span>
        </div>
      </div>
      <div className='flex flex-col p-4 mb-2 bg-zinc-700 w-[450px] xl:w-[400px] xl:m-0 rounded-xl'>
        <h2 className='uppercase'>Recovered</h2>
        <div className={'text-4xl text-green-500'}>
          {(data.recovered - data.todayRecovered).toLocaleString()}
        </div>
        <div className={'text-sm'}>
          +{data.todayRecovered.toLocaleString()}{' '}
          <span className='text-xs'>today</span>
        </div>
      </div>
      <div className='flex flex-col p-4 bg-zinc-700 w-[450px] xl:w-[400px] xl:m-0 rounded-xl'>
        <h2 className='uppercase'>Deaths</h2>
        <div className={'text-4xl text-red-600'}>
          {(data.deaths - data.todayDeaths).toLocaleString()}
        </div>
        <div className={'text-sm'}>
          +{data.todayDeaths.toLocaleString()}{' '}
          <span className='text-xs'>today</span>
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default Stats;
