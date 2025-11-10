import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./swiper.css";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import banner images
import banner1 from "../../assets/Banner/slider1.jpg";
import banner2 from "../../assets/Banner/slider2.jpg";
import Button from "../../Components/Button";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="h-[550px] w-full mt-16">
      <Swiper
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative w-full h-full lg:h-auto">
            <img className="object-cover" src={banner1} alt="banner1" />
            {/* text content */}
            <div className="absolute left-0 top-28 z-10 w-full text-white">
              <div className="container2 space-y-6">
                {/* text  */}
                <div className="max-w-[500px] space-y-6">
                  <h1 className="text-4xl lg:text-5xl font-bold leading-14">
                    The Biggest Book Store in Bangladesh
                  </h1>
                  <p className="">
                    Experience unforgettable journeys with books from every
                    genre and era.
                  </p>
                </div>
                {/* actions button all book and create book */}
                <div className="flex">
                  <Link to="/all-book">
                    <Button>All Books</Button>
                  </Link>
                  <Link to="/add-book">
                    <Button>Create Books</Button>
                  </Link>
                </div>
              </div>
            </div>
            {/* overlay */}
            <div className="lg:hidden bg-black/30 absolute inset-0 z-5"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full lg:h-auto">
            <img className="object-cover" src={banner2} alt="banner2" />
            {/* text content */}
            <div className="absolute left-0 top-28 z-10 w-full text-white">
              <div className="container2 space-y-6">
                {/* text  */}
                <div className="max-w-[500px] space-y-6">
                  <h1 className="text-4xl lg:text-5xl font-bold leading-14">
                    Discover Your Next Favorite Book
                  </h1>
                  <p className="">
                    Unlock new perspectives through books that inspire, educate,
                    and entertain.
                  </p>
                </div>
                {/* actions button all book and create book */}
                <div className="flex">
                  <Link to="/all-book">
                    <Button>All Books</Button>
                  </Link>
                  <Link to="/add-book">
                    <Button>Create Books</Button>
                  </Link>
                </div>
              </div>
            </div>
            {/* overlay */}
            <div className="lg:hidden bg-black/30 absolute inset-0 z-5"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
