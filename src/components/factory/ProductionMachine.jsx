import victoryOnePng from "../../assets/factory/Machines/M&R VictoryOne.png";
import promany from "../../assets/factory/Machines/M&R Promany.png";
import challengerTwo from "../../assets/factory/Machines/M&R Challenger II.png";
import Image from "next/image";
const ProductionMachine = () => {
  return (
    <div>
      <div className="flex items-center">
        <div className="w-1/2">
          <Image
            width={450}
            src={victoryOnePng}
            alt="victoryOnePng"
            className="max-md:order-1 border"
          />
        </div>
        <div className="flex flex-col gap-4 max-md:order-2 w-1/2">
          <h1 className="text-[#F99D1B] font-bold text-4xl lg:text-5xl">01</h1>
          <p className="text-4xl lg:text-5xl font-semibold text-[#2C2D39]">
            M&R VictoryOne
          </p>
          <div className="text-[#475467]">
            <p>Machine Type : Oval Machine</p>
            <p>Floor Serial : 8 & 10</p>
            <p>Quantity : 2 Pcs</p>
            <p>Colors : 10 Colors</p>
            <p>Hourly Production: 380 Pcs</p>
            <p>Company : M&R</p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="flex items-center flex-row-reverse">
        <div className="w-1/2">
          <Image
            width={450}
            src={challengerTwo}
            alt="challengerTwo"
            className="max-md:order-1"
          />
        </div>
        <div className="flex flex-col gap-4 max-md:order-2 w-1/2">
          <h1 className="text-[#F99D1B] font-bold text-4xl lg:text-5xl">02</h1>
          <p className="text-4xl lg:text-5xl font-semibold text-[#2C2D39]">
            M&R Challenger II
          </p>
          <div className="text-[#475467]">
            <p>Machine Type : Carousel Machine</p>
            <p>Floor Serial : 1 – 7 & 9</p>
            <p>Quantity : 8 Pcs</p>
            <p>Colors : 8 Colors to 16 Colors</p>
            <p>Hourly Production: 250 - 300 Pcs</p>
            <p>Company : M&R</p>
          </div>
        </div>
      </div>
      {/* 03 */}
      <div className="flex items-center">
        <div className="w-1/2">
          <Image
            src={promany}
            alt="promany"
            className="max-md:order-1 object-contain h-[450px] w-[450px]"
          />
        </div>
        <div className="flex flex-col gap-4 max-md:order-2 w-1/2">
          <h1 className="text-[#F99D1B] font-bold text-4xl lg:text-5xl">03</h1>
          <p className="text-4xl lg:text-5xl font-semibold text-[#2C2D39]">
            Manual Machine
          </p>
          <div className="text-[#475467]">
            <p>Machine Type : Carousel Machine</p>
            <p>Quantity : 8 Pcs</p>
            <p>Colors : 6 Colors</p>
            <p>Hourly Production: 320 Pcs</p>
            <p>Company : M&R</p>
          </div>
        </div>
      </div>
      {/* 04 */}
      <div className="flex items-center flex-row-reverse">
        <div className="w-1/2">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/xGKbVV2hubc?si=QS7BX3nZ0YV5b9Yo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="flex flex-col gap-4 max-md:order-2 w-1/2">
          <h1 className="text-[#F99D1B] font-bold text-4xl lg:text-5xl">04</h1>
          <p className="text-4xl lg:text-5xl font-semibold text-[#2C2D39]">
            Manual Machine
          </p>
          <div className="text-[#475467]">
            <p>Length : 60 Feet</p>
            <p>Quantity : 4 Pcs</p>
            <p>Hourly Production: 350 Pcs</p>
          </div>
        </div>
      </div>
      {/* 05 */}
      <div className="flex items-center my-24 gap-20">
        <div className="w-1/2">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/xGKbVV2hubc?si=QS7BX3nZ0YV5b9Yo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="flex flex-col gap-4 max-md:order-2 w-1/2">
          <h1 className="text-[#F99D1B] font-bold text-4xl lg:text-5xl">05</h1>
          <p className="text-4xl lg:text-5xl font-semibold text-[#2C2D39]">
            Heat-Press Machine
          </p>
          <div className="text-[#475467]">
            <p>Quantity : 4 Pcs</p>
            <p>Hourly Production: 350 Pcs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductionMachine;
