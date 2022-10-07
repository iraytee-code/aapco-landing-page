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
  Carousel,
  Blog
} from "../Components";

const Home = () => {
  return (
    <Fragment>
      <NavBar/>
      <Banner/>
      <PageStatistics/>
      <KeyFeature/>
      <About/>
      <Feature/>
      <Applink />
      <Pricing/>
      <Testimonial/>
      <Carousel/>
      <Blog/>
    </Fragment>
  );
};

export default Home;
