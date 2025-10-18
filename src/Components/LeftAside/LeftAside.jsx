import React, { Suspense } from "react";
import Categories from "../Category/Categories";
import { PropagateLoader } from "react-spinners";

const LeftAside = () => {
  return (
    <div>
      <Suspense fallback={<PropagateLoader />}>
        {" "}
        <Categories></Categories>
      </Suspense>
    </div>
  );
};

export default LeftAside;
