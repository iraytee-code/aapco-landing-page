
import React, { Fragment} from 'react';
import { NavBar} from '../Components';
import { Banner} from '../Components';
import { Count } from '../Components';
import { Card } from '../Components';
import { About } from '../Components';


const Home = () => {
  return (
<Fragment>
<NavBar/>
<Banner/>
<Count/>
<Card/>
<About/>
</Fragment>
  )
}

export default Home
