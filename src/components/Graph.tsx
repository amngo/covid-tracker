import { AppCtx } from "context";
import { Country } from "models";
import React, { useContext } from "react";
import { Bar } from "react-chartjs-2";
import { getDates, toAbsolute } from "utils";

const options = {
  maintainAspectRatio: false,
  interaction: {
    intersect: false,
  },
  color: "white",
  plugins: {
    legend: {
      display: true,
    },
    title: {
      display: true,
      text: "Daily Cases",
    },
  },
  scales: {
    y: {
      ticks: {
        color: "#71717a",
      },
      grid: {
        color: "#3f3f46",
      },
    },
    x: {
      ticks: {
        color: "#71717a",
      },
      grid: {
        display: false,
      },
    },
  },
};

function Graph() {
  const { countries, timeframe } = useContext(AppCtx);
  const selectedCountries: Country[] = countries.filter(
    (country) => country.selected,
  );
  const parsedData = selectedCountries.map((country) => ({
    data: toAbsolute(Object.values(country.daily.cases)).slice(
      timeframe === 0 ? 0 : -Math.abs(timeframe),
    ),
    label: country.name,
    borderColor: country.color,
    backgroundColor: country.color,
    pointRadius: 4,
    pointHoverRadius: 8,
    borderWidth: 1,
  }));
  return (
    <div className="self-center w-[300px] h-[300px] sm:w-[600px] sm:h-[400px] lg:w-[900px] lg:h-[450px] 2xl:w-[1200px] 2xl:grow relative">
      <Bar
        options={options}
        data={{
          labels: getDates(timeframe),
          datasets: [...parsedData],
        }}
      />
    </div>
  );
}

export default Graph;
