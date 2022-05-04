import { AppCtx } from "context";
import dayjs from "dayjs";
import { Country } from "models";
import React, { useContext } from "react";
import ListItem from "./ListItem";

function List() {
  const { filteredCountries } = useContext(AppCtx);
  const currentDate = dayjs().subtract(1, "days").format("M/D/YY");

  const formattedData = filteredCountries.map((country: Country) => (
    <ListItem
      country={country.name}
      province={country.province}
      flag={country.flag}
      position={country.position + 1}
      value={country.total.cases[currentDate]}
      key={country.id}
      id={country.id}
      selected={country.selected}
    />
  ));

  return <div className="overflow-y-scroll">{formattedData}</div>;
}

export default List;
