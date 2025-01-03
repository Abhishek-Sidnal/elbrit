import React from "react";
import { GiLeafSwirl, GiReturnArrow } from "react-icons/gi";
import { FaFlask } from "react-icons/fa";
import { IoLeafSharp } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { HiMiniShoppingCart } from "react-icons/hi2";

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      label: "clinically studied",
      icon: <FaFlask />,
      desc: "All products that we offer have undergone lab and safety tests",
    },
    {
      id: 2,
      label: "Vegetarian Friendly",
      icon: <IoLeafSharp />,
      desc: " We have a wide selection of vegetarian products to meet your needs",
    },
    {
      id: 3,
      label: "Made in India",
      icon: <TbWorld />,
      desc: "Shop local and explore health products made right here in India",
    },
    {
      id: 4,
      label: "Free shipping",
      icon: <HiMiniShoppingCart />,
      desc: "We deliver to your door with no shipping costs on your orders",
    },
    {
      id: 5,
      label: "No Risk",
      icon: <GiReturnArrow />,
      desc: " We ensure that all products are safe and within their use-by date",
    },
    {
      id: 6,
      label: "GMO Free",
      icon: <GiLeafSwirl />,
      desc: "Natural, no modified products and derivatives for those who need it",
    },
  ];
  return (
    <div className="bg-gradient-to-b from-blue-100 to-white  py-4 sm:py-6 md:py-10">
      <div className="p-10 sm:p-20  rounded-xl  sm:rounded-3xl   bg-highlight w-full max-w-6xl mx-auto  z-10 ">
        <div className="text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 md:gap-12 -mt-20 sm:-mt-28 md:-mt-32">
          {features.map((item) => (
            <div
              key={item.id}
              className="text-center flex flex-col items-center gap-2 sm:gap-4"
            >
              <span className="bg-white text-3xl sm:text-4xl md:text-5xl p-4 md:p-6 rounded-full text-highlight">
                {item.icon}
              </span>
              <p className=" text-lg sm:text-xl font-bold">{item.label}</p>
              <p className=" text-base sm:text-lg  ">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
