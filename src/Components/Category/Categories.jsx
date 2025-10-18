import React, { use } from "react";
import { NavLink } from "react-router";
import "./categories.css";

const categoryPromices = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(categoryPromices);
  return (
    <div>
      <h2 className="font-bold text-xl mb-5 text-center">
        All Category ({categories.length})
      </h2>
      <div className="grid grid-cols-1 gap-2 text-center text-lg  ">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            to={`/category/${category.id}`}
            className={"hover:bg-base-200 py-3 pl-3 rounded"}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
