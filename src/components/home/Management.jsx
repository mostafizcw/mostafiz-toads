"use client";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useState } from "react";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import tonyLeclerc from "../../assets/home/management/Tony Leclerc Director.jpg";
import nazmulHaque from "../../assets/home/management/Nazmul Haque Khokan, General Manager.JPG";

const Management = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  return (
    <>
      <div className="navigation-wrapper managementBg py-10">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide">
            {/* for mobile */}
            <div className=" sm:hidden">
              <div className="px-4">
                <div className="w-full h-96">
                  <Image
                    // width={200}
                    height={200}
                    src={tonyLeclerc}
                    alt="tonyLeclerc"
                    className="rounded-xl w-full h-full object-cover"
                  />
                </div>
                <p className="mt-3">
                  {`Welcome to Toads Printing, where innovation meets expertise.
                  Our state-of-the-art screen-printing facility in Bangladesh is
                  a testament to our commitment to excellence. Explore our
                  services, and let's create something extraordinary together.
                  Welcome to the Toads Printing experience.`}
                </p>
                <div className="mt-4">
                  <h3 className="text-[#475467] font-semibold ">
                    TONY LECLERC
                  </h3>
                  <h3 className="text-[#475467]">MANAGING DIRECTOR</h3>
                  <h3 className="text-[#475467]">TOADS PRINTING LTD.</h3>
                  {/* <button className="bg-[#009da0] px-7 py-3.5 mt-6 font-semibold flex items-center gap-2 rounded-md   text-white">
                    Read More <LiaLongArrowAltRightSolid size={25} />
                  </button> */}
                </div>
              </div>
            </div>
            {/* for desktop */}
            <div className="flex max-w-6xl mx-auto sm:px-10 lg:px-2 max-sm:hidden">
              <div className="w-1/2 my-auto">
                <p className="mt-3">
                  Toads Printing is one of the leading Screen Printing Company
                  in Bangladesh. Toads Printing is a France - Bangladesh Joint
                  Venture Company which is specialized in all kinds of Screen
                  Printing Facilities.
                </p>
                <div className="mt-4">
                  <h3 className="text-[#475467] font-semibold ">
                    TONY LECLERC
                  </h3>
                  <h3 className="text-[#475467]">MANAGING DIRECTOR</h3>
                  <h3 className="text-[#475467]">TOADS PRINTING LTD.</h3>
                  <button className="bg-[#009da0] px-7 py-3.5 mt-6 font-semibold flex items-center gap-2 rounded-md   text-white">
                    Read More <LiaLongArrowAltRightSolid size={25} />
                  </button>
                </div>
              </div>
              <div className="w-1/2">
                <Image
                  width={300}
                  height={300}
                  src={tonyLeclerc}
                  alt="tonyLeclerc"
                  className="mx-auto rounded-xl"
                />
              </div>
            </div>
          </div>
          <div className="keen-slider__slide">
            {/* for mobile */}
            <div className=" sm:hidden">
              <div className=" px-4">
                <div className="w-full h-96">
                  <Image
                    // width={200}
                    height={200}
                    src={nazmulHaque}
                    alt="nazmulHaque"
                    className="rounded-xl w-full h-full object-cover"
                  />
                </div>
                <p className="mt-3">
                  {`Welcome to Toads Printing, your trusted partner in
                  high-quality screen printing. With 38 years of
                  industry-leading experience, we combine French precision with
                  Bangladeshi innovation to deliver unmatched results. Your
                  satisfaction is our priority. Let's create something
                  extraordinary together.`}
                </p>
                <div className="mt-4">
                  <h3 className="text-[#475467] font-semibold ">
                    Nazmul Haque Khokan
                  </h3>
                  <h3 className="text-[#475467]">General Manager</h3>
                  <h3 className="text-[#475467]">TOADS PRINTING LTD.</h3>
                </div>
              </div>
            </div>
            {/* for desktop */}
            <div className="flex gap-5 max-w-6xl mx-auto sm:px-10 lg:px-5 max-sm:hidden">
              <div className="w-1/2 my-auto">
                <p className="mt-3">
                  {`Welcome to Toads Printing, your trusted partner in
                  high-quality screen printing. With 38 years of
                  industry-leading experience, we combine French precision with
                  Bangladeshi innovation to deliver unmatched results. Your
                  satisfaction is our priority. Let's create something
                  extraordinary together.`}
                </p>
                <div className="mt-4">
                  <h3 className="text-[#475467] font-semibold ">
                    Nazmul Haque Khokan
                  </h3>
                  <h3 className="text-[#475467]">General Manager</h3>
                  <h3 className="text-[#475467]">TOADS PRINTING LTD.</h3>
                  <button className="bg-[#009da0] px-7 py-3.5 mt-6 font-semibold flex items-center gap-2 rounded-md   text-white">
                    Read More <LiaLongArrowAltRightSolid size={25} />
                  </button>
                </div>
              </div>
              <div className="w-1/2">
                <Image
                  // width={200}
                  // height={200}
                  src={nazmulHaque}
                  alt="nazmulHaque"
                  className="mx-auto rounded-xl h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}

      {/* <section className="managementBg max-sm:px-3 max-xl:px-5 px-5 mt-8 py-[60px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-20 gap-y-10 lg:max-w-7xl mx-auto justify-items-center items-center">
          <div className="w-full">
            <div>
              <h1 className="font-bold fluid-h1 leading-tight text-[#1D2939]">
                Our <span className="text-[#009DA0]">Management </span> <br />
              </h1>
              <div className="flex justify-end w-[85%]">
                <Image
                  src={separatorIcon}
                  className="w-[70%]"
                  alt=""
                  priority={true}
                />
              </div>
              <h1 className="font-bold fluid-h1 leading-tight text-[#1D2939]">
                Speech
              </h1>
            </div>

            <p className="text-[#475467] mt-3.5">
              Toads Printing is one of the leading Screen Printing Company in
              Bangladesh. Toads Printing is a France - Bangladesh Joint Venture
              Company which is specialized in all kinds of Screen Printing
              Facilities.
            </p>
            <div className="mt-4">
              <h3 className="text-[#475467] font-semibold ">TONY LECLERC</h3>
              <h3 className="text-[#475467]">MANAGING DIRECTOR</h3>
              <h3 className="text-[#475467]">TOADS PRINTING LTD.</h3>
              <button className="bg-[#009da0] px-7 py-3.5 mt-6 font-semibold flex items-center gap-2 rounded-md   text-white">
                Read More <LiaLongArrowAltRightSolid size={25} />
              </button>
            </div>
          </div>
          <div className="">
            <Image
              src={managementSpeechPhoto}
              alt="managementSpeechPhoto"
              className="w-4/5 mx-auto"
            />
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Management;
