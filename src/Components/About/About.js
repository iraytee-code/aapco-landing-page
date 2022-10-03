import React,{Fragment} from 'react';
import AboutImage from '../../Assets/images/delivery-img.svg';
import {BsFillCheckSquareFill} from 'react-icons/bs';

const About = () => {
  return (
   <Fragment>
    <div className=' bg-Aboutbg grid gird-cols-1 lg:grid-cols-2 px-2 py-10 md:px-6 xl:px-navx lg:py-30'>
        <div className='py-2 lg:py-5'>
            <div>
                <h2 className='text-indigo font-semibold pb-3 text-lg'>ABOUT OUR APP</h2>
                <p className='text-2xl sm:text-3xl md:text-4xl font-[700] pb-4'>Deliver your Product Using
                <br/> AppCo</p>
                <p className='text-gray leading-7 pb-10'>Quick has all the right tools in order to make your 
                    website building process a breeze and automatize
                your time-consuming tasks in your development workflow.</p>
            </div>
            <div>
                <ul className='list-none'>
                    <li className='flex items-center pb-4 text-gray'> <span className='pr-4'><BsFillCheckSquareFill fill='#007bff' size='25'/></span>Tones of SASS variables</li>
                    <li className='flex items-center pb-4 text-gray'> <span className='pr-4'><BsFillCheckSquareFill fill='#007bff' size='25'/></span>Create your own skin to match your brand</li>
                    <li className='flex items-center pb-4 text-gray'> <span className='pr-4'><BsFillCheckSquareFill fill='#007bff' size='25'/></span>Globally orchestrate tactical channels whereas bricks</li>
                    <li className='flex items-center pb-4 text-gray'> <span className='pr-4'><BsFillCheckSquareFill fill='#007bff' size='25'/></span>Use Gulp to prepare all assets for production</li>
                    <li className='flex items-center pb-4 text-gray'> <span className='pr-4'><BsFillCheckSquareFill fill='#007bff' size='25'/></span>Collaboratively predominate vertical manufactured</li>
                </ul>
            </div>
        </div>

        <div className='py-2 lg:py-5'>
<div className=' flex justify-start lg:justify-end'>
    <img src={AboutImage} alt="about img" className='w-[350px] sm:w-[50%] lg:w-[70%]'/></div>
        </div>
    </div>
   </Fragment>
  )
}

export default About;
