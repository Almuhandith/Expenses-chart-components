import React from "react";
import Logo from "../../images/logo.svg";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-[#ec775f] p-5 w-[27.5rem] rounded-xl">
      <div className="text-white">
        <h1 className="text-lg font-normal">My Balance</h1>
        <p className="text-2xl font-bold">$921.48</p>
      </div>
      <div>
        <img src={Logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Header;
