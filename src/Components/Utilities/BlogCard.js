import React, {Fragment} from 'react';
import {TbArrowNarrowRight} from 'react-icons/tb';

export const BlogCard = ({image, date, comment, share, title, description}) => {
  return (
  <Fragment>

<div className='shadow-xl lg:w-[30%]'>
<div><img src={image}/></div>
<div className='p-5 md:p-7'>
<div className='flex justify-start items-center text-gray gap-4 text-sm'> <div>{date}</div> <div>{comment}</div> <div>{share}</div></div>
<div className='text-black text-xl'>{title}</div>
<div className='text-gray leading-7 text-sm'>{description}</div>
<div className=' text-gray flex items-center justify-start cursor-pointer hover:gap-3 w-[80%] pt-5'>Read more <div className='px-1 pt-1'><TbArrowNarrowRight/></div></div>
</div>
</div>
  </Fragment>
  )
}

export default BlogCard
