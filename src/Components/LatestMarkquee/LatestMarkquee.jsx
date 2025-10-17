import React from "react";
import Marquee from "react-fast-marquee";

const LatestMarkquee = () => {
  return (
    <div className="flex items-center bg-slate-200 p-3 gap-5 mt-5">
      <p className="bg-[#D72050] text-white text-2xl px-5 py-2">Latest</p>
      <Marquee speed={60} pauseOnHover={true}>
        <p className="font-bold mr-5">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </p>
        <p className="font-bold mr-5">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </p>
        <p className="font-bold mr-5">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </p>
      </Marquee>
    </div>
  );
};

export default LatestMarkquee;
