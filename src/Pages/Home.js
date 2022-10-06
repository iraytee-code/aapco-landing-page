import React, { Fragment } from "react";
import {
  PageStatistics,
  NavBar,
  Banner,
  About,
  Feature,
  Applink,
  Pricing,
  Features,
} from "../Components";

const Home = () => {
  return (
    <Fragment>
      <NavBar />
      <Banner />
      <PageStatistics />
      <Features />
      <About />
      <Feature />
      <Applink />
      <Pricing />
    </Fragment>
  );
};

export default Home;
