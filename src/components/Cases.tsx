import List from 'components/List';
import React from 'react';
import { FaGlobe } from 'react-icons/fa';
import Search from './Search';

const Cases: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-col h-full border self-center border-zinc-700 sm:self-center w-[300px] sm:w-[500px] xl:mb-0">
      <div className="flex items-center justify-center p-4 text-xl text-center bg-zinc-700">
        <FaGlobe />
        <p className="ml-2">Cases by Country</p>
      </div>
      <Search />
      <List />
    </div>
  );
};

export default Cases;
