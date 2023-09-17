import React from "react";
import "./home.scss";
import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/trending";
import Popular from "./popular/popular";
import TopRated from "./topRated/topRated";

const home = () => {
  return (
    <div className="homepage">
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  );
};

export default home;
