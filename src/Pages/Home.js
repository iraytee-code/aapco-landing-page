import React, { Fragment } from "react";
import {
  PageStatistics,
  NavBar,
  Banner,
  Card,
  About,
  Feature,
  Applink,
  Pricing,
} from "../Components";

const Home = () => {
  return (
    <Fragment>
      <NavBar />
      <Banner />
      <PageStatistics />
      <Card />
      <About />
      <Feature />
      <Applink />
      <Pricing />
    </Fragment>
  );
};

export default Home;
