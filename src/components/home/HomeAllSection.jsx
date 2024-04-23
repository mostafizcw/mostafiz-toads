import Image from "next/image";
import separatorIcon from "@/assets/separatorIcon.svg";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

import TwoServiceCard from "./TwoServiceCard";
import Link from "next/link";
import LogoShowcase from "./LogoShowcase";
import { TypeAnimation } from "react-type-animation";
import Management from "./Management";
import FourServiceCard from "./FourServiceCard";
import ThreeServiceCard from "./ThreeServiceCard";

const HomeAllSection = () => {
  // const buttons = [
  //   {
  //     label: "1",
  //     class: "bg-[#009da0] py-3.5 rounded-full px-5 text-white text-sm",
  //   },
  //   {
  //     label: "2",
  //     class:
  //       "hover:bg-[#009da0] hover:text-white duration-300 transition-all ease-in py-3.5 rounded-full px-5 text-[#667085] text-sm",
  //   },
  //   {
  //     label: "3",
  //     class:
  //       "hover:bg-[#009da0] hover:text-white duration-300 transition-all ease-in py-3.5 rounded-full px-5 text-[#667085] text-sm",
  //   },
  //   {
  //     label: "...",
  //     class:
  //       "hover:bg-[#009da0] hover:text-white duration-300 transition-all ease-in py-3.5 rounded-full font-semibold px-[18px] text-[#667085] text-sm",
  //   },
  //   {
  //     label: "8",
  //     class:
  //       "hover:bg-[#009da0] hover:text-white duration-300 transition-all ease-in py-3.5 rounded-full px-5 text-[#667085] text-sm",
  //   },
  //   {
  //     label: "9",
  //     class:
  //       "hover:bg-[#009da0] hover:text-white duration-300 transition-all ease-in py-3.5 rounded-full px-5 text-[#667085] text-sm",
  //   },
  //   {
  //     label: "10",
  //     class:
  //       "hover:bg-[#009da0] hover:text-white duration-300 transition-all ease-in py-3.5 rounded-full px-4 text-[#667085] text-sm",
  //   },
  // ];
  return (
    <div>
      <p className="bg-[#F7FEFC]"></p>
      <section className="max-sm:px-3 max-xl:px-5 px-5">
        <div className="relative">
          <div className="sm:-top-14 relative grid grid-cols-1 md:grid-cols-2 lg:gap-20 lg:max-w-7xl bg-white mx-auto justify-items-center items-center">
            <div className="w-full max-md:order-last max-md:px-2 max-md:mt-2 px-5">
              <video
                className="object-cover rounded-lg shadow-lg"
                controls
                loop
                muted
                src={require("../../assets/videos/ToadsTeaser.mp4")}
              />
              {/* <Image
                className="w-full"
                // className="max-md:w-full"
                src={welcomeImage}
                alt=""
                priority={true}
              /> */}
            </div>
            {/* welcome section */}
            <section className="w-full max-sm:p-2 max-md:p-5 mt-5">
              <h1 className="font-bold fluid-h1 leading-tight">
                <span className="text-[#1D2939]">Welcome to</span>
                <br />
                <span className="text-[#009DA0]">Toads Printing</span>
              </h1>
              <Image
                src={separatorIcon}
                alt=""
                priority={true}
                className="max-sm:w-1/2"
              />
              <div className="mt-4 space-y-3 text-[#475467]">
                <p>
                  Toads Printing is one of the leading Screen-Printing Companies
                  in Bangladesh. Toads Printing is a France - Bangladesh Joint
                  Venture Company that specializes in all kinds of
                  Screen-Printing Facilities.
                </p>
                <p>
                  With 38 years of experience as a High-Quality Screen Print
                  Supplier in Town, we specialize in sophisticated prints with
                  multiple colors and effects.
                </p>
                <Link href="/factory">
                  <button className="bg-[#009da0] px-7 py-3 mt-4  font-semibold flex items-center gap-2 rounded-md   text-white">
                    Read More <LiaLongArrowAltRightSolid size={25} />
                  </button>
                </Link>
              </div>
            </section>
          </div>
        </div>

        {/* specialized section */}
        <section className="max-sm:px-2 my-4">
          <div className="lg:max-w-7xl mx-auto">
            <div className="flex justify-center">
              <div className="max-w-3xl">
                <h1 className="font-bold max-sm:mt-5 max-sm:h-6 leading-tight ">
                  <TypeAnimation
                    className="lg:text-4xl sm:text-3xl text-lg text-gray-800"
                    sequence={[
                      // Same substring at the start will only be typed once, initially
                      "We are specialized in Index Photo",
                      1000,
                      "We are specialized in Discharge",
                      1000,
                      "We are specialized in High Density",
                      1000,
                      "We are specialized in Flock",
                      1000,
                      "We are specialized in Flock",
                      1000,
                      "We are specialized in Foil",
                      1000,
                      "We are specialized in Puff",
                      1000,
                      "We are specialized in Glitter",
                      1000,
                      "We are specialized in Plastisol",
                      1000,
                      "We are specialized in Special",
                      1000,
                    ]}
                    speed={50}
                    repeat={Infinity}
                  />
                  {/* <span className="text-[#1D2939]">We are specialized in</span>
                  <span className="text-[#009DA0]"> Rubber Print</span> */}
                </h1>
                <p className="text-lg leading-6 text-[#344054] mt-5">
                  We provide more than 9 major categories of Screen-Printing
                  techniques in our factory and are also capable of any custom
                  Print facility for Special Buyer requirements.
                </p>
              </div>
            </div>
            {/* categories slider*/}
            <section>
              {/* card section */}
              <div className="hidden lg:block mt-5">
                <FourServiceCard />
              </div>
              <div className="hidden sm:block lg:hidden">
                <ThreeServiceCard />
              </div>

              <div className="sm:hidden">
                <TwoServiceCard />
              </div>
              {/* <div className="mt-16   grid grid-cols-1 lg:grid-cols-3 items-stretch gap-8">
                {categoryCards?.map((categoryCard) => (
                  <div
                    className="border p-6 rounded-2xl shadow-xl shadow-[#f6f6f6]"
                    key={Math.random()}
                  >
                    <div className="">
                      <div>
                        <Image
                          className="w-full"
                          src={categoryCard.image}
                          alt=""
                        />
                      </div>
                      <div className="mt-5">
                        <h2 className="text-2xl font-medium text-[#1D2939]">
                          {categoryCard.title}
                        </h2>
                        <p className="mt-3 w-[85%] h-[30px] text-[#475467]">
                          {categoryCard.description}
                        </p>
                      </div>
                      <div className="mt-10">
                        <button className="flex text-[#009DA0]  font-semibold items-center gap-2">
                          Details <ImArrowUpRight2 />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div> */}
              {/* pagination */}
              {/* <div className="mt-12  lg:flex max-md:space-y-3 justify-between items-center">
                <div>
                  <button className="text-[#667085] flex items-center gap-2  font-semibold text-sm ">
                    <span>
                      <FaArrowLeft size={15} />
                    </span>
                    <span>Previous</span>
                  </button>
                </div>
                <div>
                  <button className="text-[#344054] flex items-center gap-2  font-semibold text-sm ">
                    <span>Next</span>
                    <span>
                      <ImArrowRight2 size={15} />
                    </span>
                  </button>
                </div>
              </div> */}
            </section>
          </div>

          {/* certified organization */}
          {/* <section className=" py-12 mt-10  lg:mt-40 ">
            <div className="grid grid-cols-1 lg:grid-cols-2  lg:w-[1280px]  mx-auto   justify-between gap-10  items-center ">
              <div className="w-full flex ">
                <Image
                  className="object-contain w-[80%]"
                  src={certifiedOrgPhoto}
                  alt=""
                />
              </div>
              <div className="w-full">
                <div>
                  {" "}
                  <h1 className="font-bold text-4xl lg:text-5xl leading-tight text-[#1D2939]">
                    We are Certified by
                  </h1>
                  <h1 className="font-bold text-4xl lg:text-5xl leading-tight text-[#1D2939]">
                    Top <span className="text-[#009DA0]">Organization</span>{" "}
                    <br />
                  </h1>
                  <div className="flex justify-end w-[70%]">
                    <Image
                      src={separatorIcon}
                      className="w-[75%]"
                      alt=""
                      priority={true}
                    />
                  </div>
                </div>

                <p className="text-[#475467] mt-3.5">
                  At Toads Printing, we take immense pride in our commitment to
                  quality, sustainability, and ethical practices. We are
                  thrilled to announce that we have been awarded certification
                  by a prominent and widely recognized organization in the
                  textile and fashion industry. This recognition serves as a
                  testament to our unwavering dedication to delivering
                  excellence in every aspect of our garments, from design to
                  production and beyond.
                </p>
                <div className="mt-4">
                  <button className="bg-[#009da0] px-7 py-3.5 mt-6 font-semibold flex items-center gap-2 rounded-md   text-white">
                    Learn More <LiaLongArrowAltRightSolid size={25} />
                  </button>
                </div>
              </div>
            </div>
          </section> */}
        </section>
        {/* management speech */}
      </section>
      {/* <div className="my-6 px-4 sm:hidden">
        <h1 className="text-2xl font-semibold leading-tight text-center text-gray-800">
          Our <span className="text-[#009DA0]">Management</span> Speech
        </h1>
      </div> */}
      <div className="mt-16">
        <h1 className="sm:text-5xl text-2xl font-semibold text-gray-800 leading-tight text-center mb-7">
          Our <span className="text-[#009DA0]">Management</span> Speech
        </h1>
        <Management />
        <div className="px-4 sm:hidden">
          <button className="bg-[#009da0] w-full flex justify-center py-3 mt-6 font-semibold  gap-2 rounded-md text-center text-white">
            Read More <LiaLongArrowAltRightSolid size={25} />
          </button>
        </div>
      </div>

      <LogoShowcase />
    </div>
  );
};

export default HomeAllSection;
