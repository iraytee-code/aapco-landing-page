import React, {Fragment} from 'react';
import FeatureImg from '../../Assets/images/features_img.png';
import {VscSmiley} from 'react-icons/vsc';
import {FaBalanceScaleLeft} from 'react-icons/fa';
import {MdOutlineHeadsetMic} from 'react-icons/md';
import {BsCardChecklist} from 'react-icons/bs';
import {BsCardHeading} from 'react-icons/bs';
import {MdOutlineColorLens} from 'react-icons/md';

const Feature = () => {
  return (

    <Fragment>
    <div className="px-2 md:px-6 lg:px-36 pb-20 md:mt-20 md:pb-30">
<div className='text-center'>
    <h3 className='text-indigo font-semibold pb-3 text-lg'>BEST FEATURES</h3>
    <h2 className='text-2xl sm:text-3xl md:text-4xl font-[700] pb-4'>Easy Process with Best Features</h2>
    <p className='text-gray leading-7 pb-10 md:w-50'>Objectively deliver professional value with diverse web-readiness. Collaboratively transition wireless customer service without goal-oriented catalysts for change. Collaboratively.</p>
</div>


<div className='flex flex-col lg:flex-row justify-between items-start gap-4'>

<ul className='list-none py-10'>
<li className='flex justify-between items-start py-7'><div className='pr-5'><div className='bg-indigo200 w-12 h-12 rounded-full flex justify-center items-center'><VscSmiley fill='indigo' size='20'/></div></div><div className='pr-5'><h3 className='font-bold text-1xl md:text-2xl'>
Responsive web design</h3><p className='text-gray pt-5'>
Modular and interchangable componente between layouts and even demos.</p></div>
</li>
<li className='flex justify-between items-start py-7'><div className='pr-5'><div className='bg-sky w-12 h-12 rounded-full flex justify-center items-center'><FaBalanceScaleLeft fill='skyblue' size='20'/></div></div><div className='pr-5'><h3 className='font-bold text-1xl md:text-2xl'>
Loaded with features</h3><p className='text-gray pt-5'>Modular and interchangable componente between layouts and even demos
</p></div></li>
<li className='flex justify-between items-start py-7'><div className='pr-5'><div className='bg-red100 w-12 h-12 rounded-full flex justify-center items-center'><MdOutlineHeadsetMic fill='brown' size='20'/></div></div><div className='pr-5'><h3 className='font-bold text-1xl md:text-2xl'>
Friendly online support</h3><p className='text-gray pt-5'>
Modular and interchangable componente between layouts and even demos.
</p></div></li>
</ul>
<div>
    <img src={FeatureImg} alt="feature-img" className='lg: w-[500px]'/>
</div>

<ul className='list-none py-10 '>
<li className='flex justify-between items-start py-7'><div className='pr-5'><div className='bg-teal200 w-12 h-12 rounded-full flex justify-center items-center'><BsCardChecklist fill='teal' size='20'/></div></div><div className='pr-5'><h3 className='font-bold text-1xl md:text-2xl'>
Free updates forever</h3><p className='text-gray pt-5'>
Modular and interchangable componente between layouts and even demos.</p></div></li>
<li className='flex justify-between items-start py-7'><div className='pr-5'><div className='bg-red200 w-12 h-12 rounded-full flex justify-center items-center'><BsCardHeading fill='darkred' size='20'/></div></div><div className='pr-5'><h3 className='font-bold text-1xl md:text-2xl'>
Built with Sass</h3><p className='text-gray pt-5'>
Modular and interchangable componente between
layouts and even demos.</p></div></li>
<li className='flex justify-between items-start py-7'><div className='pr-5'><div className='bg-blue200 w-12 h-12 rounded-full flex justify-center items-center'><MdOutlineColorLens fill="darkblue" size='20'/></div></div><div className='pr-5'><h3 className='font-bold text-1xl md:text-2xl'>Infinite colors
</h3><p className='text-gray pt-5'>
Modular and interchangable componente between
 layouts and even demos.</p></div></li>
</ul>

</div>
    </div>
    </Fragment>

  )
}

export default Feature
