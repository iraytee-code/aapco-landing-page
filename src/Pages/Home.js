import React, { Fragment } from "react";
import {
  PageStatistics,
  NavBar,
  Banner,
  KeyFeature,
  About,
  Feature,
  Applink,
  Pricing,
  Testimonial
} from "../Components";

const Home = () => {
  return (
    <Fragment>
      <NavBar />
      <Banner />
      <PageStatistics />
      <KeyFeature />
      <About />
      <Feature />
      <Applink />
      <Pricing />
      <Testimonial/>
    </Fragment>
  );
};

export default Home;
