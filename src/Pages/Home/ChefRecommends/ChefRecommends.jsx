import React from "react";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import foodImage from "../../../assets/menu/salad-bg.jpg";

const ChefRecommends = () => {
  return (
    <div className="mt-24">
      <SectionTitle
        heading={"---Should Try---"}
        subHeading={"CHEF RECOMMENDS"}
      />
      <div className="grid md:grid-cols-3 gap-5 pt-5 pb-6">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={foodImage} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="border-b-4 px-7 uppercase font-semibold text-red-300 border-red-300 rounded-xl bg-red-50 py-2">
                add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={foodImage} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="border-b-4 px-7 uppercase font-semibold text-red-300 border-red-300 rounded-xl bg-red-50 py-2">
                add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={foodImage} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="border-b-4 px-7 uppercase font-semibold text-red-300 border-red-300 rounded-xl bg-red-50 py-2">
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecommends;
