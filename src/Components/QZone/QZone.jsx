import React from "react";
import swimmingImg from "../../assets/swimming.png";
import classImg from "../../assets/class.png";
import playImg from "../../assets/playground.png";
import phImg from "../../assets/bg.png";

const QZone = () => {
  return (
    <div>
      <div className="bg-base-200 p-3 mx-3">
        <div>
          <h3 className="font-bold text-xl mb-4">Q-Zone</h3>
        </div>
        <div className="flex flex-col gap-8">
          <img src={swimmingImg} alt="" />
          <img src={classImg} alt="" />
          <img src={playImg} alt="" />
        </div>
      </div>
      <div className="mx-3 mt-5">
        <img src={phImg} alt="" />
      </div>
    </div>
  );
};

export default QZone;
