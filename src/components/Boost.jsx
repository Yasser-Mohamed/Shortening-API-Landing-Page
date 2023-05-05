import React from "react";
import BGdisktop from "../images/bg-boost-desktop.svg";
import BGmobile from "../images/bg-boost-mobile.svg";
const Boost = () => {
  return (
    <>
      <section className="boost bg-prim h-[275px] relative">
        <picture>
          <source media="(min-width:768px )" srcset={BGdisktop} />
          <img className="w-full h-[275px]" src={BGmobile} alt="bg-mobile" />
        </picture>
        <div className="grid place-items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <h2 className="mb-5 text-white text-3xl font-bold md:text-4xl text-center">Boost your links today</h2>
          <button className="btn-cta rounded-3xl"> Get Started</button>
        </div>
      </section>
    </>
  );
};

export default Boost;
