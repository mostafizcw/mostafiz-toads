"use client";
import { useState } from "react";
import ProductionMachine from "./ProductionMachine";
import Curing from "./Curing";
const FacInfrastructure = () => {
  const [tabActive, setTabActive] = useState(1);
  return (
    <>
      <section className="max-w-6xl mx-auto max-xl:px-5 mt-8">
        <header className="text-center flex flex-col items-center gap-6">
          <h1 className="font-semibold text-3xl leading-normal md:text-4xl lg:text-5xl md:leading-normal lg:leading-normal">
            Factory <span className="text-[#009DA0]"> Infrastructure</span>
          </h1>
          <p className="text-lg max-w-[800px]">
            Toads Printing has the Most Advanced Printing Machines from M&R,
            Curing Machines, Heat-Press Machines, and other necessary
            maintenance machines.
          </p>
        </header>
        {/* Tab */}
        <div className="flex gap-12 my-16 font-medium">
          <button
            onClick={() => setTabActive(1)}
            className={`${
              tabActive == 1 && "text-[#009DA0] border-b-2 border-[#009DA0]"
            } `}
          >
            Production Machineries
          </button>
          <button
            onClick={() => setTabActive(2)}
            className={`${
              tabActive == 2 && "text-[#009DA0] border-b-2 border-[#009DA0]"
            }`}
          >
            Maintenance Machineries
          </button>
        </div>
        {tabActive == 1 && <ProductionMachine />}
        {tabActive == 2 && <Curing />}
      </section>
    </>
  );
};

export default FacInfrastructure;
