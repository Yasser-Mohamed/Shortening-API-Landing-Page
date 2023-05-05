import React from "react";
import brand from "../images/icon-brand-recognition.svg";
import records from "../images/icon-detailed-records.svg";
import fully from "../images/icon-fully-customizable.svg";
const Advanced = () => {
  return (
    <>
      <section className="bg-gray-100 pt-52 pb-20 ">
        <div className="max-width">
          <h2 className="text-4xl font-bold text-prim mb-3 pt-10 text-center">Advanced Statistics</h2>
          <p className="text-slate-400 text-center mb-10 md:mb-20">
            Track how your links are performing across the web with<br/> our advanced
            statistics dashboard.
          </p>
          <div className="card z-10 relative grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:mb-10">
            <article className="bg-white p-5 rounded">
              <img src={brand} alt="brand" className="bg-prim p-3 -mt-12 rounded-full" />
              <h3 className="text-prim font-bold mb-2 text-lg mt-5">Brand Recognition</h3>
              <p className="text-slate-400 text-sm">
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </article>
            <article className="bg-white p-5 rounded">
              <img src={records} alt="records" className="bg-prim p-3 -mt-12 rounded-full" />
              <h3 className="text-prim font-bold mb-2 text-lg mt-5">Detailed Records</h3>
              <p className="text-slate-400 text-sm">
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </article>
            <article className="bg-white p-5 rounded">
              <img src={fully} alt="fully" className="bg-prim p-3 -mt-12 rounded-full" />
              <h3 className="text-prim font-bold mb-2 text-lg mt-5">Fully Customizable</h3>
              <p className="text-slate-400 text-sm">
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Advanced;
