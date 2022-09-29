import React, { Fragment} from 'react';
import logo from "../../Assets/images/logo-white.png";
import {AiOutlineBars} from 'react-icons/ai';
import {BsFillCaretDownFill} from 'react-icons/bs';

const NavBar = () => {
  return (
<Fragment>
   <div className='bg-navbg text-primaryText flex text-center  justify-between items-center px-2 py-6 md:px-6 text-sm xl:px-navx '>
<div className='w-[7rem] cursor-pointer'><img src={logo} alt="logo"/></div>
<div className='sm:flex lg:hidden cursor-pointer'><AiOutlineBars fill='#ffffff' size='25'/></div>
<div className='sm:hidden lg:flex hidden'>
  <ul className='flex'>
    <li className='flex items-center cursor-pointer'>Home<BsFillCaretDownFill fill='white'className='pt-1 pl-1'/></li>
    <li className='px-4 cursor-pointer'>About</li>
    <li className='px-4 cursor-pointer'>Features</li>
    <li className='px-4 cursor-pointer '>Pricing</li>
    <li className='px-4 cursor-pointer'>Screenshot</li>
    <li className='px-4 cursor-pointer flex items-center'>Pages<BsFillCaretDownFill fill='white' className='pt-1 pl-1'/></li>
    <li className='px-4 cursor-pointer flex items-center'>Blog<BsFillCaretDownFill fill='white' className='pt-1 pl-1'/></li>
    <li className='px-4 cursor-pointer'>Team</li>
    <li className='px-4 cursor-pointer'>Contact</li>
  </ul>
</div>
  </div>
</Fragment>
  )
}

export default NavBar
