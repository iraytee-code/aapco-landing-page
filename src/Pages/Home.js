
import React, { Fragment} from 'react';
import { NavBar} from '../Components';
import { Banner} from '../Components';
import { Count } from '../Components';
import { Card } from '../Components';
import { About } from '../Components';
import { Feature } from '../Components';
import {Applink}  from '../Components';


const Home = () => {
  return (
<Fragment>
<NavBar/>
<Banner/>
<Count/>
<Card/>
<About/>
<Feature/>
<Applink/>
</Fragment>
  )
}

export default Home
