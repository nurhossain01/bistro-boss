import React from "react";

const ItemsBar = ({ item }) => {
  const { image, name, recipe } = item;
  return (
    <div className="flex space-x-4 items-center justify-center py-5">
      <img style={{borderRadius: '0 200px 200px 200px'}} className="w-24" src={image} alt="" />
      <div>
        <h3>{name}--------------</h3>
        <h4>{recipe}</h4>
      </div>
    </div>
  );
};

export default ItemsBar;
