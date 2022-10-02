
import React, { Fragment} from 'react';
import { NavBar} from '../Components';
import { Banner} from '../Components';
import { Count } from '../Components';
import { Card } from '../Components';


const Home = () => {
  return (
<Fragment>
<NavBar/>
<Banner/>
<Count/>
<Card/>
</Fragment>
  )
}

export default Home
