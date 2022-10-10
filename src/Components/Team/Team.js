import React,{Fragment} from 'react'
import {TeamComponent} from '../../Components';
import member1img from '../../Assets/images/team-1.jpg';
import member2img from '../../Assets/images/team-2.jpg';
import member3img from '../../Assets/images/team-3.jpg';
import member4img from '../../Assets/images/team-4.jpg';

 const Team = () => {
  return (

    <Fragment>
   <div className='px-2 md:px-6 lg:px-36 py-10 lg:py-20'>
    <div className=' text-center'>
<div className='text-indigo font-semibold py-2'>LOVELY TEAM</div>
<div className='text-2xl md:text-3xl font-bold pb-5 text-black'>Our Team Members</div>
<div className='text-gray leading-7 pb-5'><div>Following reasons show advantages of adding AppCo to your lead pages, foster market </div>positioning products without demos and checkouts.</div>
    </div>
  <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
  <TeamComponent
  name="Edna mason"
  role="Senior Designer "
  image={member1img}/>
   <TeamComponent
  image={member2img}
  name="James Thomas"
  role="Senior Designer "/>
   <TeamComponent
  image={member3img}
  name="Erik logan"
  role="Senior Designer "/>
   <TeamComponent
  image={member4img}
  name="Emma Smith"
  role="Senior Designer "/>
  </div>
    </div>     

    </Fragment>
  )
}

export default Team;
