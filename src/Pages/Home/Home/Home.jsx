import React from 'react';
import Banner from '../Banner/Bannar';
import Categories from '../Categories/Categories';
import Chef_Service from '../Chef_Service/Chef_Service';
import PopularMenu from '../PopularMenu/PopularMenu';
import Contact from '../Contact/Contact';
import ChefRecommends from '../ChefRecommends/ChefRecommends';
import OurMenu from '../OurMenu/OurMenu';
import Testimonial from '../Testimonial/Testimonial';
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>bistro-boss | home</title>
      </Helmet>
      <Banner />
      <Categories />
      <Chef_Service />
      <PopularMenu />
      <Contact />
      <ChefRecommends />
      <OurMenu />
      <Testimonial />
    </div>
  );
};

export default Home;