import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonial = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div className="py-28">
      <SectionTitle
        heading={"---What Our Clients Say---"}
        subHeading={"TESTIMONIALS"}
      />
      <div className="w-2/3 mx-auto">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {review.map((productReview) => (
            <SwiperSlide className="px-12">
              <Rating
                style={{
                  maxWidth: 180,
                  marginLeft: 280
                }}
                value={productReview.rating}
                readOnly
              />
              <p>{productReview.details}</p>
              <h3 className="text-center text-2xl text-red-300">
                {productReview.name}
              </h3>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
