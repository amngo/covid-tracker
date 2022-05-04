import { Country } from "models";
import React, { createContext, useMemo, useState } from "react";

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

export function AppProvider({ children }: { children: JSX.Element }) {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [timeframe, setTimeframe] = useState<number>(30);

  const value = useMemo(
    () => ({
      countries,
      setCountries,
      timeframe,
      setTimeframe,
      filteredCountries,
      setFilteredCountries,
    }),
    [countries, filteredCountries, timeframe],
  );

  return <AppCtx.Provider value={value}>{children}</AppCtx.Provider>;
}
