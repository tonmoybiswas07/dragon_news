import React from "react";
import logo from "../../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div>
      <div className="flex justify-center items-center mt-5">
        <img src={logo} alt="" />
      </div>
      <h3 className="text-[18px] text-gray-500 mt-2 font-semibold">
        Journalism Without Fear or Favour
      </h3>
      <p className="text-[20px] font-semibold text-gray-500">
        {" "}
        {format(new Date(), "EEEE , LLLL dd , yyyy")}
      </p>
    </div>
  );
};

export default Header;
