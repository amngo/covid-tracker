import { AppCtx } from "context";
import { Country } from "models";
import React, { useContext, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

function Search() {
  const [input, setInput] = useState<string>("");
  const { countries, setFilteredCountries } = useContext(AppCtx);

  useEffect(() => {
    const filtered = countries.filter(
      (country: Country) =>
        country.name.toUpperCase().includes(input.toUpperCase()) ||
        country.province?.toUpperCase().includes(input.toUpperCase()),
    );
    setFilteredCountries(filtered);
  }, [countries, input, setFilteredCountries]);

  return (
    <div className="relative w-full">
      <FaSearch className="absolute transform -translate-y-1/2 top-1/2 left-4" />
      <input
        type="text"
        className="w-full py-4 pl-12 border-0 bg-base-300 focus:outline-none"
        value={input}
        placeholder="Search for country or province..."
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}

export default Search;
