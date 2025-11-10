import React from "react";
import Banner from "./Banner";
import LatestBooks from "./LatestBooks";
import TopGenres from "./TopGenres";

const Home = () => {
  return (
    <div>
      <Banner />
      <LatestBooks />
      <TopGenres />
    </div>
  );
};

export default Home;
