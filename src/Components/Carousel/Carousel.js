import React, {Fragment} from 'react';
import imgCarousel_1 from '../../Assets/images/01.png';
import imgCarousel_2 from '../../Assets/images/02.png';
import imgCarousel_3 from '../../Assets/images/03.png';
import imgCarousel_4 from '../../Assets/images/04.png';
import imgCarousel_5 from '../../Assets/images/05.png';
import imgCarousel_6 from '../../Assets/images/06.png';

const Carousel = () => {
  return (
    <Fragment>
   <div>

   <div className='text-center pb-10'>
            <div className='text-indigo font-semibold py-2'>APP SCREENSHOTS</div>
            <div className="text-2xl md:text-3xl font-bold pb-5 text-black">App Screenshots Looks Awesome</div>
            <div className='text-gray leading-7 pb-5'>Credibly synthesize multimedia based networks vis-a-vis re-engineer enterprise-wide imperatives whereas fully tested web-readiness.
            Continually leverage existing worldwide interfaces</div>
        </div>
        
        <div className=''>
<div className='flex justify-between items-center'>
    <div className='rounded-2xl pb-10 mx-10'><img src={imgCarousel_1} alt="carousel img" /></div>

    <div className='rounded-2xl pb-10 mx-10'><img src={imgCarousel_2} alt="carousel img" /></div>

    <div className='rounded-2xl pb-10 mx-10'><img src={imgCarousel_3} alt="carousel img" /></div>

    <div className='rounded-2xl pb-10 mx-10 w-100'><img src={imgCarousel_4} alt="carousel img" /></div>

    <div className='rounded-2xl pb-10 mx-10 w-100'><img src={imgCarousel_5} alt="carousel img" /></div>

    <div className='rounded-2xl  pb-10 mx-10'><img src={imgCarousel_6} alt="carousel img" /></div>
</div>
        </div>
   </div>
    </Fragment>
  )
}
export default Carousel;
