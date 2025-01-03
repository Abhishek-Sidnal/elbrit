import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className=" p-2 bg-white rounded-lg  ">
      <Image
        src="/assets/logo.png" // Replace with the actual image path
        alt="Vitamin Bottle"
        width={150}
        height={150}
      />
    </div>
  );
};

export default Header;
