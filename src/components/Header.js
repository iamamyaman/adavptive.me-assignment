import React from 'react';
import {FiMenu} from "react-icons/fi"

const Header = () => {
  return (
    <div className='w-full flex justify-between h-[80px] px-8 md:px-32 items-center'>
      <p className='py-[3px] px-2 text-logoColor font-[18px] font-bold border-2 border-logoColor cursor-pointer uppercase md:lowercase'>Adaptiv</p>
      <div className='hidden md:flex'>
        <ul className='flex gap-6 text-[15px] text-gray-900 font-bold cursor-pointer'>
          <li>White Paper</li>
          <li> Academy</li>
          <li>Careers</li>
          <li>Sign Up</li>
        </ul>
      </div>
      <div className="lg:hidden text-2xl">
        <FiMenu classname="text-headingColor"/>
      </div>
    </div>
    
  );
}

export default Header;
