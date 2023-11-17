import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import silde1 from "../../../assets/home/slide1.jpg";
import silde2 from "../../../assets/home/slide2.jpg";
import silde3 from "../../../assets/home/slide3.jpg";
import silde4 from "../../../assets/home/slide4.jpg";
import silde5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";

const Categories = () => {
  return (
    <>
      <SectionTitle
        heading={"---From 11:00am to 10:00pm---"}
        subHeading={"ORDER ONLINE"}
      ></SectionTitle>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper w-3/5 my-24"
      >
        <SwiperSlide>
          <img src={silde1} alt="" />
          <h3 className="text-2xl uppercase text-center -mt-16 text-white">
            salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={silde2} alt="" />
          <h3 className="text-2xl uppercase text-center -mt-16 text-white">
            pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={silde3} alt="" />
          <h3 className="text-2xl uppercase text-center -mt-16 text-white">
            soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={silde4} alt="" />
          <h3 className="text-2xl uppercase text-center -mt-16 text-white">
            desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={silde5} alt="" />
          <h3 className="text-2xl uppercase text-center -mt-16 text-white">
            salad
          </h3>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Categories;
