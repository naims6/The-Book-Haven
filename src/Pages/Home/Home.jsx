import Banner from "./Banner";
import LatestBooks from "./LatestBooks";
import TopGenres from "./TopGenres";
import BookGrid from "./BookOfTheWeek";
import AboutSection from "./AboutSection";
import StatisticSection from "./StatisticSection";
import BlogSection from "./BlogSection";
import FAQSection from "./FAQSection";
import HighlightsSection from "./HightlightSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutSection />
      <LatestBooks />
      <BookGrid />
      <TopGenres />
      <HighlightsSection />
      <StatisticSection />
      <BlogSection />
      <FAQSection />
    </div>
  );
};

export default Home;
