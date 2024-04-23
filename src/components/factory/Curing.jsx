import Image from "next/image";
import React from "react";
import mrSprint from "../../assets/factory/Machines/M&R SPRINT® 3000.png";
import mrSprint2500 from "../../assets/factory/Machines/M&R SPRINT® EV 2500.png";
import radicure from "../../assets/factory/Machines/M&R SPRINT® EV 2500.png";
const Curing = () => {
  return (
    <div>
      <div className="flex items-center">
        <div className="w-1/2">
          <Image
            width={450}
            src={mrSprint}
            alt="mrSprint"
            className="max-md:order-1 border"
          />
        </div>
        <div className="flex flex-col gap-4 max-md:order-2 w-1/2">
          <h1 className="text-[#F99D1B] font-bold text-4xl lg:text-5xl">01</h1>
          <p className="text-4xl lg:text-5xl font-semibold text-[#2C2D39]">
            M&R Conveyor Dryer
          </p>
          <div className="text-[#475467]">
            <p>Model: M&R SPRINT® 3000</p>
            <p>Dryer Type: Gas Dryer</p>
            <p>Feature: 21A</p>
            <p>Hour Production: 1500 Pcs</p>
            <p>Quantity: 1 Pcs</p>
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className="flex items-center flex-row-reverse">
        <div className="w-1/2">
          <Image
            width={450}
            src={mrSprint2500}
            alt="mrSprint2500"
            className="max-md:order-1"
          />
        </div>
        <div className="flex flex-col gap-4 max-md:order-2 w-1/2">
          <h1 className="text-[#F99D1B] font-bold text-4xl lg:text-5xl">02</h1>
          <p className="text-4xl lg:text-5xl font-semibold text-[#2C2D39]">
            M&R Conveyor Dryer
          </p>
          <div className="text-[#475467]">
            <p>Model: M&R SPRINT® EV 2500</p>
            <p>Dryer Type: Gas Dryer</p>
            <p>Feature: 14A</p>
            <p>Hour Production: 2800 Pcs</p>
            <p>Quantity: 1 Pcs</p>
          </div>
        </div>
      </div>
      {/* 03 */}
      <div className="flex items-center">
        <div className="w-1/2">
          <Image
            src={radicure}
            alt="radicure"
            className="max-md:order-1 object-contain h-[450px] w-[450px]"
          />
        </div>
        <div className="flex flex-col gap-4 max-md:order-2 w-1/2">
          <h1 className="text-[#F99D1B] font-bold text-4xl lg:text-5xl">03</h1>
          <p className="text-4xl lg:text-5xl font-semibold text-[#2C2D39]">
            M&R Conveyor Dryer
          </p>
          <div className="text-[#475467]">
            <p>Model: M&R RADICURE D™</p>
            <p>Dryer Type: Electric Dryer</p>
            <p>Hour Production: 7500 Pcs</p>
            <p>Quantity: 5 Pcs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curing;
