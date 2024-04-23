"use client";
import cardOne from "@/assets/home/categoryImage/Discharge/one.png";
import cardTwo from "@/assets/home/categoryImage/Foil Print/one.png";
import cardThree from "@/assets/home/categoryImage/Glitter/one.png";
import cardFour from "@/assets/home/categoryImage/HD/one.png";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";

const FourServiceCard = () => {
  const [sliderRef] = useKeenSlider(
    {
      slides: {
        perView: 4,
        spacing: 20,
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
      <div
        ref={sliderRef}
        className=" grid lg:grid-cols-4 keen-slider max-w-7xl mx-auto"
      >
        <div className="keen-slider__slide">
          <h1 className="absolute bottom-6 text-4xl font-semibold text-white px-4">
            Discharge Print
          </h1>
          <Image src={cardOne} alt="cardOne" className="w-full h-full" />
        </div>
        <div className="keen-slider__slide ">
          <h1 className="absolute bottom-6 text-4xl font-semibold text-white px-4">
            HD PRINT
          </h1>
          <Image src={cardTwo} alt="cardTwo" className="w-full h-full" />
        </div>

        <div className="keen-slider__slide ">
          <h1 className="absolute bottom-6 text-4xl font-semibold text-white px-4">
            DISCHARGE PRINT
          </h1>
          <Image src={cardThree} alt="cardThree" className="w-full h-full" />
        </div>

        <div className="keen-slider__slide">
          <h1 className="absolute bottom-6 text-4xl font-semibold text-white px-4">
            PHOTO PRINT
          </h1>
          <Image src={cardFour} alt="cardFour" className="w-full h-full" />
        </div>
      </div>
    </>
  );
};

export default FourServiceCard;
