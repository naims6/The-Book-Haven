import React from "react";
import Banner from "./Banner";
import LatestBooks from "./LatestBooks";
import TopGenres from "./TopGenres";
// import BookOfTheWeek from "./BookOfTheWeek";
import BookGrid from "./BookOfTheWeek";
import AboutSection from "./AboutSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutSection />
      <LatestBooks />
      <BookGrid />
      <TopGenres />
    </div>
  );
};

export default Home;
