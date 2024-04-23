import employeeOne from "@/assets/factory/employeeOne.png";
import employeeTwo from "@/assets/factory/employeeTwo.png";
import employeeThree from "@/assets/factory/employeeThree.png";
import Image from "next/image";
const SkilledEmployee = () => {
  return (
    <>
      <section className="mt-8 max-w-7xl mx-auto max-xl:px-5">
        <div className="grid md:grid-cols-2 gap-x-6">
          <div className="md:h-[900px]">
            <div>
              <h1 className="font-semibold text-3xl leading-normal md:text-4xl lg:text-5xl md:leading-normal lg:leading-normal text-[#0D152E]">
                High Skilled Employee With{" "}
                <span className="text-[#009DA0]">Modern Technology</span>
              </h1>
              <p className="mt-8 text-[#475467]">
                {`Toads Printing is equipped with cutting-edge M&R auto printing
                machines and guarantees the finest print quality. Our dedicated
                team of highly skilled professionals is committed to elevating
                your brand value, ensuring top-notch solutions that uphold our
                company's pride. Welcome to a partnership that's as friendly as
                it is confident. Let's make your brand shine!`}
              </p>
            </div>
            <Image
              src={employeeTwo}
              alt="employeeTwo"
              className="rounded-md mt-20"
            />
          </div>
          <div className="md:h-[900px] max-md:grid max-md:grid-cols-2 gap-5 max-md:mt-5">
            <Image
              src={employeeOne}
              alt="employeeOne"
              className="md:w-4/5 md:h-1/2 object-cover mb-6 rounded-md"
            />
            <Image
              src={employeeThree}
              alt="employeeThree"
              className="md:w-3/4 object-cover md:h-[48%] rounded-md"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SkilledEmployee;
