import Image from "next/image";
import { GiMedicines } from "react-icons/gi";
import { FaWeight } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";

const HeroSection = () => {
  const data = [
    {
      id: 1,
      label: "Vitamins",
      icon: <GiMedicines />,
      desc: "Increased Vitamins and minerals in your diet",
    },
    {
      id: 2,
      label: "Weight Loss",
      icon: <FaWeight />,
      desc: " Weight Loss Find scientifically proven solutions",
    },
    {
      id: 3,
      label: "Functional Foods",
      icon: <FaBowlFood />,
      desc: "Functional Foods From protein powers to baby formula",
    },
  ];

  return (
    <div className="bg-blue-100 p-5 w-full ">
      <h1 className="text-3xl sm:text-5xl  md:text-7xl whitespace-nowrap  font-bold text-center text-[#013568] ">
        Essential Vitamins
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-14 place-items-center ">
        <div className="space-y-2  sm:space-y-6 md:space-y-10  py-5 md:mt-20 order-2 sm:order-1 ">
          <p className=" text-lg sm:text-xl md:text-2xl ">
            Online Medical Supplies
          </p>
          <p className="text-highlight font-bold text-xl sm:text-2xl md:text-3xl ">
            {" "}
            Get Your Vitamins <br className="sm:hidden md:block" /> & Minerals
          </p>
          <button className=" bg-highlight text-gray-200 font-semibold text-base sm:text-lg rounded-full px-4 py-2 sm:px-6 sm:py-3  ">
            Explore
          </button>
        </div>
        <div className="bg-[#FFE9B5] radius h-64 sm:h-80 w-64 sm:w-96 relative  my-4 order-1  ">
          <Image
            src="/assets/hero-product.png"
            alt="Vitamin Bottle"
            width={400}
            height={400}
            className="sm:absolute -top-20 "
          />
        </div>
        <div className="  space-y-6 p-5 md:mt-20 order-3 ">
          {data.map((item) => (
            <div className="flex items-center gap-2 sm:gap-3 " key={item.id}>
              <span className="bg-highlight text-xl sm:text-3xl md:text-4xl p-2 sm:p-3 rounded-full text-gray-300">
                {item.icon}
              </span>
              <div>
                <p className=" text-base sm:text-lg md:text-xl font-bold sm:mb-1">
                  {item.label}
                </p>
                <p className=" text-sm sm:text-base md:text-lg">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full gap-2 sm:gap-4  sm:mt-5">
        <div className="p-3 sm:p-4 md:p-6 bg-gray-400  rounded-full  "> </div>
        <div className="p-3 sm:p-4 md:p-6 bg-gray-400 rounded-full  "> </div>
      </div>
    </div>
  );
};

export default HeroSection;
