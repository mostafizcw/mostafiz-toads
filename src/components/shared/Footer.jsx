import Image from "next/image";
import footerLogo from "@/assets/footer/footerLogo.png";
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import { HiOutlinePhone } from "react-icons/hi";

const Footer = () => {
  return (
    <section className="bg-[#009da0] max-md:px-5 max-xl:px-5 pt-16 pb-12">
      <section className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 lg:flex justify-between  gap-12  mx-auto">
          <div className="space-y-3 w-full">
            <Image src={footerLogo} alt="footerLogo" className="max-sm:w-32" />
            <p className="text-white text-sm">
              At Toads Printing, we take immense pride in being at the heart of
              the fashion industry. Our state-of-the-art garments factory is
              where creativity meets craftsmanship.
            </p>
          </div>
          <div className="w-full lg:flex lg:justify-center">
            <div>
              <h2 className="font-lg font-semibold text-white">Menu</h2>
              <ul className="mt-5 text-sm text-white space-y-2">
                <li>Home</li>
                <li>Factory</li>
                <li>Print Technic</li>
                <li>Client</li>
                <li>Compliance</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="col-span-1 w-full ">
            <div className="">
              <h2 className="font-lg font-semibold text-white">Contact</h2>
              <ul className="mt-5 text-sm text-white space-y-2">
                <li className="flex  items-center gap-2">
                  <HiOutlinePhone size={20} /> +88-01 971030281
                </li>
                <li className="flex  items-start gap-2">
                  <IoMailOutline size={20} /> tony@toads.fr, <br />{" "}
                  khokan@toadsbd.com
                </li>
                <li className="flex  items-start gap-2">
                  <IoLocationOutline size={20} /> Plot # 252, 134 Tarabo, Rupganj{" "}
                  <br /> Narayanganj, Bangladesh.
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <hr className="my-10" /> */}
        <>
          {/* <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-white">
                copyright©2023, Toads Printing All Right Reserved
              </p>
            </div>
            <div className="flex text-white items-center gap-3">
              <GrFacebookOption
                size={30}
                className="border-2 hover:bg-white hover:text-black duration-300 transition-all ease-in-out cursor-pointer rounded-full p-1"
              />
              <BiLogoLinkedin
                size={30}
                className="border-2 hover:bg-white hover:text-black duration-300 transition-all ease-in-out cursor-pointer rounded-full p-1"
              />
              <GrTwitter
                size={30}
                className="border-2 hover:bg-white hover:text-black duration-300 transition-all ease-in-out cursor-pointer rounded-full p-1"
              />
              <TbBrandInstagram
                size={30}
                className="border-2 hover:bg-white hover:text-black duration-300 transition-all ease-in-out cursor-pointer rounded-full p-1"
              />
            </div>
          </div> */}
          <hr className="mt-[38px] mb-6" />
          <div className="flex justify-center items-center">
            <p className="text-xs  text-white">
              copyright©2023, Toads Printing All Right Reserved
            </p>
          </div>
        </>
      </section>
    </section>
  );
};

export default Footer;
