import React from "react";
import Banner from "./Banner";
import LatestBooks from "./LatestBooks";
import TopGenres from "./TopGenres";
import BookOfTheWeek from "./BookOfTheWeek";

const Home = () => {
  return (
    <div>
      <Banner />
      <LatestBooks />
      <BookOfTheWeek />
      <TopGenres />
    </div>
  );
};

export default Home;
