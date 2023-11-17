import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import banner3 from '../../../assets/menu/banner3.jpg'
import PopularMenu from "../PopularMenu/PopularMenu";

const OurMenu = () => {
  return (
    <div>
      <Helmet>
        <title>bistro-boss | menu</title>
      </Helmet>
      <Cover
        image={banner3}
        title={"OUR MENU"}
        text={"Would you like to try a dish?"}
      ></Cover>
      <PopularMenu></PopularMenu>
      
    </div>
  );
};

export default OurMenu;
