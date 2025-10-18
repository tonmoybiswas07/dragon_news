import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h3 className="font-bold text-xl mt-4">Find Us On</h3>
      <div>
        <div className="join join-vertical w-full p-4  ">
          <button className="btn join-item justify-start">
            <FaFacebook></FaFacebook> Facebook
          </button>
          <button className="btn join-item justify-start">
            <FaTwitter></FaTwitter> Twitter
          </button>
          <button className="btn join-item justify-start">
            <FaInstagram></FaInstagram> Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
