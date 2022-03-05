import List from 'components/List';
import React from 'react';
import { FaGlobe } from 'react-icons/fa';
import Search from './Search';

const Cases: React.FC = (): JSX.Element => {
  return (
    <div className='flex flex-col h-full border border-zinc-700 w-[500px] sm:self-center xl:min-w-[400px] xl:mb-0 rounded-t-xl'>
      <div className='flex items-center justify-center p-4 text-xl text-center bg-zinc-700 rounded-t-xl'>
        <FaGlobe />
        <p className='ml-2'>Cases by Country</p>
      </div>
      <Search />
      <List />
    </div>
  );
};

export default Cases;
