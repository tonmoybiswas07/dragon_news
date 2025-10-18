import React from "react";
import { NavLink } from "react-router";
import userImg from "../../assets/user.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center my-10  ">
      <div className="left mr-[220px]"> </div>
      <div className="middle ">
        <nav className="flex justify-center items-center gap-5 text-xl font-semibold text-[#706F6F]">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/career">Career</NavLink>
        </nav>
      </div>
      <div className="right flex justify-center items-center gap-5">
        <img src={userImg} alt="" />
        <button className=" bg-[#403F3F] text-white font-semibold text-2xl py-2 px-6 rounded cursor-pointer">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
