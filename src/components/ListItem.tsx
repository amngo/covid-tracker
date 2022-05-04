import { AppCtx } from "context";
import React, { useContext } from "react";
import { selectCountry } from "utils";

interface Props {
  id: number;
  country: string;
  province: string | undefined;
  flag: string | undefined;
  position: number;
  value: number;
  selected: boolean;
}

function ListItem({
  id,
  country,
  province,
  flag,
  position,
  value,
  selected,
}: Props) {
  const { countries, setCountries } = useContext(AppCtx);
  return (
    <div
      tabIndex={0}
      role="button"
      className={`flex items-center p-4 justify-between cursor-pointer text-sm h-[50px] ${
        selected ? "bg-primary" : "hover:bg-base-300 bg-base-200"
      }`}
      onClick={() => {
        setCountries(selectCountry(id, countries));
      }}
      onKeyPress={() => {
        setCountries(selectCountry(id, countries));
      }}
    >
      <div className="flex items-center">
        <div className="w-[25px] text-center">{position}</div>
        <img src={flag} alt={country} className="w-[32px] h-[20px] mx-4" />
        <div className="flex flex-col">
          <div className="">{country}</div>
          {province ? (
            <div className="text-xs capitalize">({province})</div>
          ) : null}
        </div>
      </div>

      <div>{value.toLocaleString()}</div>
    </div>
  );
}

export default ListItem;
