import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import ItemsBar from "./ItemsBar";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const menuItems = data.filter((item) => item.category === "popular");
        setMenu(menuItems);
      });
  }, []);
  return (
    <div>
      <SectionTitle
        heading={"---Check it out---"}
        subHeading={"FROM OUR MENU"}
      />
      <div className="grid md:grid-cols-2 gap-5">
        {menu.map((item) => (
          <ItemsBar key={item._id} item={item}></ItemsBar>
        ))}
      </div>
      <div className="flex justify-center pt-12 pb-24">
        <button className="uppercase border-b-4 px-7 py-4 border-black rounded-xl">view full menu</button>
      </div>
    </div>
  );
};
export default PopularMenu;
