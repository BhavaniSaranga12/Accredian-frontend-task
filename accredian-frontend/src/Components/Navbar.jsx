


import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import accredianLogo from '../assets/accredian-logo.jpeg';

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const buttonClicked = () => {
    setIsClicked(!isClicked);
  };

  return (
    <nav className=' px-[2%] flex justify-between items-center mt-4 mx-5  py-2 relative z-50'>
      <div className='flex items-center'>
        <img src={accredianLogo} alt="Accredian Logo" className=' md:size-[50%] size-[50%] mr-[5%]' />
        <select name="courses" id="courses" className='bg-blue-500 p-2 rounded text-white border-none w-[40%] md:w-[26%]'>
          <option value="courses" className='bg-white text-black'>Courses</option>
          <option className='bg-white text-black' value="Data-science">Data Science</option>
          <option value="AI" className='bg-white text-black'>AI</option>
          <option value="Business-analtyics" className='bg-white text-black'>Business Analytics</option>
          <option value="product-management" className='bg-white text-black'>Product Management</option>
        </select>
      </div>

      <div className={`absolute md:relative bg-white md:bg-transparent top-[10.5vh] md:top-0 left-0 w-full md:w-auto md:py-0 px-3 md:px-0 transition-transform duration-300 ease-in-out ${isClicked ? 'block' : 'hidden'} md:flex md:items-center`}>
        <ul className='flex flex-col md:flex-row justify-between gap-6 items-center md:ml-auto'>
          <li onClick={() => setIsClicked(false)} className='hover:text-gray-500 md:text-sm text-center cursor-pointer hover:underline'>Refer & Earn</li>
          <li onClick={() => setIsClicked(false)} className='hover:text-gray-500 md:text-sm text-center cursor-pointer hover:underline'>Resources</li>
          <li onClick={() => setIsClicked(false)} className='hover:text-gray-500 md:text-sm text-center cursor-pointer hover:underline'>About Us</li>
          <li onClick={() => setIsClicked(false)} className='bg-gray-300 px-3 py-1 rounded   md:text-sm text-center cursor-pointer hover:underline'>Login</li>
          <li onClick={() => setIsClicked(false)} className='bg-blue-600 px-3 py-1 rounded text-white hover:bg-blue-500 md:text-sm text-center cursor-pointer hover:underline'>Try for free</li>
        </ul>
      </div>

      <div className='md:hidden'>
        {isClicked ? (
          <CloseIcon onClick={buttonClicked} className='text-3xl block cursor-pointer' />
        ) : (
          <MenuIcon onClick={buttonClicked} className='text-3xl block cursor-pointer' />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
