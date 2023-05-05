import React from "react";
import showcase from "../images/illustration-working.svg"

const Showcase = () => {
  return (
    <>
      <section className="py-10 lg:py-20">
        <div className="max-width grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 place-items-center ">
          <article className="order-2 text-center ">
            <h1 className="lg:text-6xl text-5xl text-prim leading-tight font-bold">More than just shorter links</h1>
            <p className="lg:text-lg text-slate-400 mb-10">
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <button className="btn-cta rounded-3xl">Get Started</button>
          </article>
          <article className="md:order-2"> 
            <img src={showcase} alt="" />
          </article>
        </div>
      </section>
    </>
  );
};

export default Showcase;
