import React, { Fragment} from 'react';
import logo from "../../assets/images/logo-white.png";
import {AiOutlineBars} from 'react-icons/ai';
import {BsFillCaretDownFill} from 'react-icons/bs';

const NavBar = () => {
  return (
<Fragment>
   <div className='bg-navbg text-primaryText flex text-center justify-between items-center px-2 py-5 md: px-navx text-sm'>
<div className='w-[6rem]'><img src={logo} alt="logo"/></div>
<div className='sm:flex md:hidden'><AiOutlineBars fill='#ffffff' size='30'/></div>
<div className='sm:hidden md:flex hidden'>
  <ul className='flex'>
    <li className='flex items-center'>Home <BsFillCaretDownFill fill='white'className='pt-1 pl-1'/></li>
    <li className='px-4'>About</li>
    <li className='px-4'>Features</li>
    <li className='px-4'>Pricing</li>
    <li className='px-4'>Screenshot</li>
    <li className='px-4 flex items-center'>Pages <BsFillCaretDownFill fill='white' className='pt-1 pl-1'/></li>
    <li className='px-4 flex items-center'>Blog <BsFillCaretDownFill fill='white' className='pt-1 pl-1'/></li>
    <li className='px-4'>Team</li>
    <li className='px-4'>Contact</li>
  </ul>
</div>

   </div>
</Fragment>
  )
}

export default NavBar
