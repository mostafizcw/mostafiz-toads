"use client";
import Image from "next/image";
import faconnable from "../../assets/home/companyLogo/Faconnable.png";
import protest from "../../assets/home/companyLogo/Protest.png";
import ripCurlLogo from "../../assets/home/companyLogo/Rip-Curl-Logo.png";
import salty from "../../assets/home/companyLogo/Salty.png";
import ttilika from "../../assets/home/companyLogo/TTILIKA.jpg";
import vissla from "../../assets/home/companyLogo/Vissla.png";
import tcSurfDesigns from "../../assets/home/companyLogo/T and C Surf Designs.png";
import { useEffect } from "react";
const LogoShowcase = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        // eslint-disable-next-line no-unused-vars
        const scrollerInnerWrapper = scroller.querySelector(
          ".scroller__inner-wrapper"
        );
        const scrollerInner = scroller.querySelector(".scroller__inner");
        // eslint-disable-next-line no-unused-vars
        const scrollerInnerContent = Array.from(scrollerInner.children);

        const duplicatedItem = scrollerInner.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.parentElement.appendChild(duplicatedItem);
      });
    }

    addAnimation();
  }, []);
  return (
    <>
      <div className="text-center mt-10 px-3 text-2xl font-bold text-gray-900">
        Global screen print supplier for
        <span className="text-[#009da0]"> top brands</span>
      </div>
      <div className="scroller mb-5" data-duration="fast">
        <div className="scroller__inner-wrapper">
          <ul className="img-list scroller__inner">
            <li>
              <Image src={faconnable} alt="faconnable" />
            </li>
            <li>
              <Image src={protest} alt="protest" />
            </li>
            <li>
              <Image src={ripCurlLogo} alt="ripCurlLogo" />
            </li>
            <li>
              <Image src={salty} alt="salty" />
            </li>
            <li>
              <Image src={ttilika} alt="ttilika" />
            </li>
            <li>
              <Image src={vissla} alt="vissla" />
            </li>
            <li>
              <Image src={tcSurfDesigns} alt="tcSurfDesigns" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default LogoShowcase;
