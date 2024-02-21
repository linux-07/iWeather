import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className='px-7 py-5 bg-purple-700 text-white flex justify-between'>
        <h1 className='text-2xl font-bold'>
          <Link to="/">iWeather</Link>
        </h1>
        <ul className='flex text-lg'>
          <li className='px-5 hover:font-bold'>
            <Link to="/">Home</Link>
          </li>
          <li className='hover:font-bold'>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
