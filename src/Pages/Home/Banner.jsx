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
// import banner3 from "../../assets/Banner/slider3.jpg";

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
          <div className="w-full">
            <img className="w-full object-cover" src={banner1} alt="banner1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full">
            <img className="w-full object-cover" src={banner2} alt="banner2" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
