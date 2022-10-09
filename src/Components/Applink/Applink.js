import React, {Fragment} from 'react';
import {GrPlay} from 'react-icons/gr';
import {ImAndroid} from 'react-icons/im';
import {AiOutlineApple} from 'react-icons/ai';
 const Applink = () => {
  return (
   <Fragment>
<div  className='Applink_container'>
<div className='Applink h-[30vh] md:h-[60vh]  flex-cols justify-center items-center lg:px-36 py-20'>
<div className='relative text-center pb-10 pt-5'>
<div className="flex h-20 w-20 rounded-full m-auto">
  <div className="animate-ping absolute inline-flex h-[3.5rem] w-[3.5rem] rounded-full bg-white opacity-75"></div>
  <button className="relative inline-flex items-center justify-center rounded-full h-[3.5rem] w-[3.5rem] bg-white cursor-pointer"><GrPlay fill='blue' className='pl-1' size='25'/></button>
</div>  
    <div className='font-semibold text-white w-90 m-auto'>Watch video overwiew</div>
</div>
<div className='relative flex items-center justify-center'>
    <div><button className='bg-white text-indigo font-semibold flex justify-center items-center rounded-full w-[130px] h-[50px] px-1 py-2 cursor-pointer mr-3'><ImAndroid fill='indigo'/><span className='pl-2'> Google play</span></button></div>
    <div><button className='bg-transparent text-white border-2 font-semibold flex justify-center items-center rounded-full w-[130px] h-[50px] px-1 py-2 cursor-pointer ml-3'><AiOutlineApple fill='white'/> <span className='pl-2'>App Store</span></button></div>
</div>
</div>
</div>
   </Fragment>
  )
}

export default Applink;
