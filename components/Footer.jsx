import Image from "next/image";
import { FaBlenderPhone } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdAttachEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
  const infos = [
    {
      icon: <FaBlenderPhone size={36} />,
      label: "Phone Number",
      desc: "+974 3118 1843",
    },
    {
      icon: <MdAttachEmail size={36} />,
      label: "Email Address",
      desc: "Elbrithcqhr@gmail.com",
    },
    {
      icon: <FaMapLocationDot size={36} />,
      label: "Office Location",
      desc: " Ambassador Street, Zone 61,",
    },
  ];
  return (
    <div className="w-full bg-highlight p-3 sm:p-6 md:p-10 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5  text-gray-300 ">
        {infos.map((info) => (
          <div className=" flex items-center gap-4  bg-[#215D72] py-2 px-2 rounded-lg ">
            {info.icon}
            <div>
              <span className="text-xs font-normal">{info.label}</span>
              <p className="text-sm font-medium ">{info.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 mt-5 ">
        <div className=" p-2 bg-white rounded-lg flex items-center justify-center ">
          <Image
            src="/assets/logo.png" // Replace with the actual image path
            alt="Vitamin Bottle"
            width={300}
            height={300}
          />
        </div>
        <div className="p-2 ">
          <p className="text-sm text-white ">
            Your health, physical and emotional well-being is important to us.
            We are always by your side and have made it even easier for you to
            find the necessary vitamins.
          </p>
        </div>
        <div className=" text-gray-400">
          <MdLocationOn className="inline mr-1" />
          <span>
            Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai
            400051
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
