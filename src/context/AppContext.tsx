import { Country } from 'models';
import React, { createContext, useState } from 'react';

interface AppContextInterface {
  countries: Country[];
  setCountries: React.Dispatch<React.SetStateAction<Country[]>>;
  filteredCountries: Country[];
  setFilteredCountries: React.Dispatch<React.SetStateAction<Country[]>>;
  timeframe: number;
  setTimeframe: React.Dispatch<React.SetStateAction<number>>;
}

export const AppCtx = createContext<AppContextInterface>({
  countries: [],
  setCountries: () => {},
  filteredCountries: [],
  setFilteredCountries: () => {},
  timeframe: 30,
  setTimeframe: () => {},
});

export const AppProvider = ({ children }: { children: JSX.Element }) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [timeframe, setTimeframe] = useState<number>(30);

  return (
    <AppCtx.Provider
      value={{
        countries,
        setCountries,
        timeframe,
        setTimeframe,
        filteredCountries,
        setFilteredCountries,
      }}
    >
      {children}
    </AppCtx.Provider>
  );
};
