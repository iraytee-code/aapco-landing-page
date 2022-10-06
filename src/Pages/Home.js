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
  Testimonial,
  Carousel
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
      <Carousel/>
    </Fragment>
  );
};

export default Home;
