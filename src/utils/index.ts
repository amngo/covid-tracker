import { Country } from 'models';
import moment from 'moment';
import { ISO_COUNTRIES } from '../constants';

const sortBy = (date: string, type: string) => {
  return (a: any, b: any) =>
    a.total[type][date] > b.total[type][date]
      ? -1
      : b.total[type][date] > a.total[type][date]
      ? 1
      : 0;
};

export const sortData = (date: string, type: string, data: Country[]) => {
  return data
    .sort(sortBy(date, type))
    .map((country: Country, index: number) => {
      return { ...country, position: index };
    });
};

export const parseData = (data: any) => {
  const parsed: Country[] = [];

  data.forEach((country: any, index: number) => {
    const flag = getFlag(country.country);

    if (flag) {
      const cases: any = Object.entries(country.timeline.cases);

      const calculatedCases = [];
      for (let i = 1; i < cases.length; i++) {
        calculatedCases.push([...cases[i]]);
        calculatedCases[i - 1][1] =
          Math.abs(cases[i][1]) - Math.abs(cases[i - 1][1]);
      }

      const deaths: [string, number][] = Object.entries(
        country.timeline.deaths,
      );
      const calculatedDeaths = [];
      for (let i = 1; i < cases.length; i++) {
        calculatedDeaths.push([...deaths[i]]);
        calculatedDeaths[i - 1][1] =
          Math.abs(deaths[i][1]) - Math.abs(deaths[i - 1][1]);
      }

      parsed.push({
        id: index,
        position: index,
        name: country.country,
        province: country.province,
        flag,
        selected: country.country === 'USA',
        color: getRandomColor(),
        total: { ...country.timeline },
        daily: {
          cases: Object.fromEntries(calculatedCases),
          deaths: Object.fromEntries(calculatedDeaths),
        },
      });
    }
  });

  return parsed;
};

export const getFlag = (country: string) => {
  if (ISO_COUNTRIES[country]) {
    return `https://countryflagsapi.com/png/${ISO_COUNTRIES[country]}`;
  } else return undefined;
};

export const selectCountry = (id: number, countries: Country[]): Country[] => {
  return countries.map((country: Country) => {
    if (country.id === id) {
      return { ...country, selected: !country.selected };
    }
    return { ...country };
  });
};

export const getRandomColor = () => {
  return '#' + (Math.random().toString(16) + '0000000').slice(2, 8);
};

export const toAbsolute = (arr: number[]): number[] => {
  return arr.map((value) => Math.abs(value));
};

export const getDates = (days: number): string[] => {
  const dates: string[] = [];
  const currentDate: string = moment().subtract(1, 'days').format('M/D/YY');

  if (days === 0) {
    days = moment(currentDate, 'M/D/YY').diff(
      moment('1/22/20', 'M/D/YY'),
      'days',
    );
  }

  for (let i = 0; i < days; i++) {
    dates.push(
      moment(currentDate, 'M/D/YY').subtract(i, 'days').format('M/D/YY'),
    );
  }

  return dates.reverse();
};
