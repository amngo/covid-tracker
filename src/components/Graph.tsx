import { AppCtx } from 'context';
import React, { useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import { getDates, toAbsolute } from 'utils';

const options = {
  interaction: {
    intersect: false,
  },
  responsive: true,
  color: 'white',
  plugins: {
    legend: {
      display: true,
    },
    title: {
      display: true,
      text: 'Daily Cases',
    },
  },
  scales: {
    y: {
      ticks: {
        color: '#71717a',
      },
      grid: {
        color: '#3f3f46',
      },
    },
    x: {
      ticks: {
        color: '#71717a',
      },
      grid: {
        display: false,
      },
    },
  },
};

const Graph: React.FC = (): JSX.Element => {
  const { countries, timeframe } = useContext(AppCtx);
  const selectedCountries = countries.filter((country) => country.selected);
  const parsedData = selectedCountries.map((country) => ({
    data: toAbsolute(Object.values(country.daily.cases)).slice(
      timeframe === 0 ? 0 : -Math.abs(timeframe)
    ),
    label: country.name,
    borderColor: country.color,
    backgroundColor: country.color,
    pointRadius: 4,
    pointHoverRadius: 8,
    borderWidth: 1,
  }));
  return (
    <div className='self-center w-5/6 h-5/6 xl:mt-8'>
      <Bar
        options={options}
        data={{
          labels: getDates(timeframe),
          datasets: [...parsedData],
        }}
      />
    </div>
  );
};

export default Graph;
