import React from "react";
import Header from "../../Components/Header/Header";
import { Outlet } from "react-router";
import LatestMarkquee from "../../Components/LatestMarkquee/LatestMarkquee";

const Roots = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatestMarkquee></LatestMarkquee>
        </section>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </div>
  );
};

export default Roots;
