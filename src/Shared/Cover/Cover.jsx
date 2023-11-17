import React from "react";
import { Parallax } from "react-parallax";

const Cover = ({ image, title, text }) => {
  return (
    <div className="mb-24">
      <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={image}
        bgImageAlt="the dog"
        strength={-200}
      >
        <div
          className="hero h-[700px]"
          // style={{
          //   backgroundImage: `url(${image})`,
          // }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">{title}</h1>
              <p className="mb-5">{text}</p>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Cover;
