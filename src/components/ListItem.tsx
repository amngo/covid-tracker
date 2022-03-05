import { AppCtx } from 'context';
import React, { useContext } from 'react';
import { selectCountry } from 'utils';

interface Props {
  id: number;
  country: string;
  province: string | undefined;
  flag: string | undefined;
  position: number;
  value: number;
  selected: boolean;
}

const ListItem: React.FC<Props> = ({
  id,
  country,
  province,
  flag,
  position,
  value,
  selected,
}): JSX.Element => {
  const { countries, setCountries } = useContext(AppCtx);
  return (
    <li
      className={`flex items-center p-4 justify-between cursor-pointer text-sm h-[50px] ${
        selected ? 'bg-sky-700 hover:bg-sky-600' : 'hover:bg-zinc-700'
      }`}
      onClick={() => {
        setCountries(selectCountry(id, countries));
      }}
    >
      <div className='flex items-center'>
        <div className='w-[25px] text-center'>{position}</div>
        <img src={flag} alt={country} className='w-[32px] h-[20px] mx-4' />
        <div className='flex flex-col'>
          <div className=''>{country}</div>
          {province ? (
            <div className='text-xs capitalize'>({province})</div>
          ) : null}
        </div>
      </div>

      <div>{value.toLocaleString()}</div>
    </li>
  );
};

export default ListItem;
