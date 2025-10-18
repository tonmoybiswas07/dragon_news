import React from "react";
import Header from "../../Components/Header/Header";
import { Outlet } from "react-router";
import LatestMarkquee from "../../Components/LatestMarkquee/LatestMarkquee";
import Navbar from "../../Components/Navbar/Navbar";
import LeftAside from "../../Components/LeftAside/LeftAside";
import RightAside from "../../Components/RightAside/RightAside";

const Roots = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatestMarkquee></LatestMarkquee>
        </section>
        <section className="w-11/12 mx-auto">
          <Navbar></Navbar>
        </section>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12  ">
        <aside className="col-span-3">
          <LeftAside></LeftAside>
        </aside>
        <div className="col-span-6">
          <Outlet></Outlet>
        </div>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
      <footer></footer>
    </div>
  );
};

export default Roots;
