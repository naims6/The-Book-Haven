import React from "react";
import Banner from "./Banner";
import LatestBooks from "./LatestBooks";
import TopGenres from "./TopGenres";
// import BookOfTheWeek from "./BookOfTheWeek";
import BookGrid from "./BookOfTheWeek";

const Home = () => {
  return (
    <div>
      <Banner />
      <LatestBooks />
      <BookGrid />
      <TopGenres />
    </div>
  );
};

export default Home;
