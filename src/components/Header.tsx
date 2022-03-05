import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Header: React.FC = (): JSX.Element => {
  return (
    <div className='flex items-center justify-between w-full px-4 py-2 text-white bg-sky-600'>
      <span className='text-xl'>Covid Tracker</span>
      <div className='text-2xl cursor-pointer'>
        <FaGithub />
      </div>
    </div>
  );
};

export default Header;
