import Image from "next/image";
import managementSpeechPhoto from "@/assets/home/managementSpeech.png";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import separatorIcon from "@/assets/separatorIcon.svg";

const FactoryTeams = () => {
  return (
    <>
      <section className="managementBg max-sm:px-3 max-xl:px-5 px-5 mt-8 py-[60px]">
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
      </section>
    </>
  );
};

export default FactoryTeams;
