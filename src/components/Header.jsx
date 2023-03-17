import React from "react";
import Logo from "../images/logo.svg";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-SoftRed p-5 w-[21.5rem] md:w-[29.5rem] rounded-xl">
      <div className="text-white">
        <h1 className="text-lg font-normal text-Cream">My balance</h1>
        <p className="text-2xl font-bold">$921.48</p>
      </div>
      <div>
        <img src={Logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Header;
