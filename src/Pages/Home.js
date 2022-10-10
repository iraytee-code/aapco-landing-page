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
  Accordion,
  Blog,
  Team,
  Contact,
  Partners,
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
      <Accordion/>
      <Blog/>
      <Team/>
      <Contact/>
      <Partners/>
    </Fragment>
  );
};

export default Home;
