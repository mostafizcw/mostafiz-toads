import FactorySlide from "@/components/factory/FactorySlide";
import Image from "next/image";
import separatorIcon from "@/assets/separatorIcon.svg";
import factoryImgOne from "@/assets/factory/factory-img-one.png";
import Management from "@/components/home/Management";
import SkilledEmployee from "@/components/factory/SkilledEmployee";
import FacInfrastructure from "@/components/factory/FacInfrastructure";
const FactoryPage = () => {
  return (
    <>
      <FactorySlide />
      <div className="max-w-6xl mx-auto">
        <div className="max-xl:px-5">
          <section className="grid md:grid-cols-2 lg:gap-20 gap-5 my-8 justify-items-center items-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/QJlYhHsfH7o?rel=0&si=TASCpNQNxnj-H9hK"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            {/* <iframe
              src="https://drive.google.com/file/d/1kcrB-RwX4lz3b_9xnY0KzbmEH_BrxJss/preview"
              width="640"
              height="480"
              allow="autoplay"
            ></iframe> */}
            {/* <Image
              src={factoryImgOne}
              alt="factoryImgOne"
              className="rounded-[16px] w-full"
            /> */}
            <div className="flex items-center">
              <div>
                <h1 className="text-[#1A1B22] font-semibold xl:text-5xl lg:text-[40px] text-3xl">
                  The <span className="text-[#009DA0]">Journey Begins!</span>
                </h1>

                {/* <video
                  className="w-full h-[50vh] md:h-[80vh] object-cover"
                  autoPlay
                  loop
                  muted
                  src="https://drive.google.com/file/d/1kcrB-RwX4lz3b_9xnY0KzbmEH_BrxJss/preview"
                /> */}
                {/* <Image
                  src={separatorIcon}
                  alt=""
                  priority={true}
                  className="xl:ml-40 lg:ml-20 md:ml-20 ml-24 mb-6 lg:w-3/5 md:w-1/2 w-3/5"
                /> */}
                <div className="text-[#344054] font-normal text-base sm:text-lg mb-[16px]">
                  Founded in 1985 in Capbreton, France, Toads Printing rapidly
                  became synonymous with exceptional screen printing quality
                  over its 21-year tenure. In 2006, driven by the opportunities
                  presented by globalization, we transitioned our operations to
                  Bangladesh. This strategic relocation has allowed us to
                  continue our legacy of excellence on a global scale.
                </div>
              </div>
            </div>
          </section>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:gap-20 gap-5 my-8 justify-items-center items-center">
            <div className="flex items-center">
              <div>
                <h1 className="text-[#1A1B22] font-semibold xl:text-5xl lg:text-[40px] text-3xl">
                  Start of a <span className="text-[#009DA0]">New Era!</span>
                </h1>
                <Image
                  src={separatorIcon}
                  alt=""
                  priority={true}
                  className="xl:ml-40 lg:ml-20 md:ml-20 ml-24 mb-6 lg:w-3/5 md:w-1/2 w-3/5"
                />
                <div className="text-[#344054] font-normal text-base sm:text-lg mb-[16px]">
                  Toads Printing has been operational in Bangladesh since 2006
                  and successfully provides quality Screen Printing goods
                  globally, especially in the USA, France, and the Netherlands.
                  Toads Printing has a vast amount of Print Categories to choose
                  from and is capable of providing any special Print Technique
                  for Special Buyer Requirements.
                </div>
              </div>
            </div>

            <Image
              src={factoryImgOne}
              alt="factoryImgOne"
              className="w-full rounded-[16px] max-md:order-first"
            ></Image>
          </section>
        </div>
        {/* <FactoryTeams /> */}
      </div>
      <Management />
      <SkilledEmployee />
      <FacInfrastructure />
    </>
  );
};

export default FactoryPage;
