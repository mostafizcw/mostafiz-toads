import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import React, { useState } from "react";
import heroOne from "@/assets/home/heroCarouselImg/heroOne.png";
import heroTwo from "@/assets/home/heroCarouselImg/heroTwo.png";
import heroThree from "@/assets/home/heroCarouselImg/heroThree.png";
import heroFour from "@/assets/home/heroCarouselImg/heroFour.png";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import Link from "next/link";

const ClientCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 3000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <Image
              src={heroOne}
              alt="heroOne"
              // className="object-cover bg-center w-full h-full"
              layout="responsive"
            />
            <div className="w-[655px] ml-[135px] mt-[4%] relative invisible md:visible">
              <h1 className="text-5xl font-semibold leading-relaxed">
                High-Quality Screen
                <br />
                Printing Company in Town
              </h1>
              <p className="my-7">
                Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit.
              </p>
              <Link href={"/factory"}>
                <button className="bg-[#009da0] px-7 py-3 font-semibold rounded-md   text-white">
                  Learn More{" "}
                  <LiaLongArrowAltRightSolid size={25} className="inline" />
                </button>
              </Link>
            </div>
          </div>
          <div className="keen-slider__slide number-slide2">
            <Image
              src={heroOne}
              alt="heroOne"
              // className="object-cover bg-center w-full h-full"
              layout="responsive"
            />
          </div>
          <div className="keen-slider__slide number-slide3">
            <Image
              src={heroTwo}
              alt="heroTwo"
              // className="object-cover bg-center w-full h-full"
              layout="responsive"
            />
          </div>
          <div className="keen-slider__slide number-slide4">
            <Image
              src={heroThree}
              alt="heroThree"
              className="object-cover bg-center w-full h-full"
              // layout="responsive"
            />
          </div>
          <div className="keen-slider__slide number-slide5">
            <Image
              src={heroFour}
              alt="heroFour"
              className="object-cover bg-center w-full h-full"
              layout="responsive"
            />
          </div>
          {/* <div className="keen-slider__slide number-slide6">6</div> */}
        </div>
        {loaded && instanceRef.current && (
          <div className="invisible md:visible">
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </div>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots absolute bottom-40 left-1/2 transform -translate-x-1/2 invisible md:visible">
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
    </>
  );
};

export default ClientCarousel;

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
