import React from "react";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, Pagination, Navigation, Scrollbar } from "swiper/modules";

const Slider = ({ data }) => {
  return (
    <>
      <div className="w-4/5 mx-auto my-24">
        <Swiper
          breakpoints={{
            0: {
              // width: 576,
              slidesPerView: 1,
              spaceBetween: 5,
            },
            620: {
              // width: 768,
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1100: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={3}
          modules={[Autoplay, Navigation, Pagination, Scrollbar]}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {data.map((item) => (
            <SwiperSlide className="lg:mx-1">
              <Card name={item.name} uni={item.university} />
            </SwiperSlide>
          ))}

          {/* <SwiperSlide className="lg:mx-1">
            <Card />
          </SwiperSlide>
          <SwiperSlide className="lg:mx-1">
            <Card />
          </SwiperSlide>
          <SwiperSlide className="lg:mx-1">
            <Card />
          </SwiperSlide> */}
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
