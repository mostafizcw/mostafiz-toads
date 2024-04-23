"use client";
import cardOne from "@/assets/home/cardImage/cardOne.png";
import cardTwo from "@/assets/home/cardImage/cardTwo.png";
import cardThree from "@/assets/home/cardImage/cardThree.png";
import cardFour from "@/assets/home/cardImage/cardFour.png";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useState } from "react";

const TwoServiceCard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      // loop: true,
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
      slides: {
        perView: 2,
        spacing: 15,
      },
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
  // console.log(instanceRef.current?.track.details.slides.length);
  // console.log(currentSlide);
  return (
    <>
      <div ref={sliderRef} className="mt-[50px] grid grid-cols-2 keen-slider">
        <div className="keen-slider__slide number-slide1">
          <h1 className="absolute bottom-6 text-xl font-semibold text-white px-4">
            RUBBER PRINT
          </h1>
          <Image src={cardOne} alt="cardOne" className="w-full h-full" />
        </div>
        <div className="keen-slider__slide number-slide2">
          <h1 className="absolute bottom-6 text-xl font-semibold text-white px-4">
            HD PRINT
          </h1>
          <Image src={cardTwo} alt="cardTwo" className="w-full h-full" />
        </div>

        <div className="keen-slider__slide number-slide3">
          <h1 className="absolute bottom-6 text-xl font-semibold text-white px-4">
            DISCHARGE PRINT
          </h1>
          <Image src={cardThree} alt="cardThree" className="w-full h-full" />
        </div>

        <div className="keen-slider__slide number-slide4">
          <h1 className="absolute bottom-6 text-xl font-semibold text-white px-4">
            PHOTO PRINT
          </h1>
          <Image src={cardFour} alt="cardFour" className="w-full h-full" />
        </div>
        {loaded && instanceRef.current && (
          <div className="">
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
                instanceRef.current.track.details.slides.length - 2
              }
            />
          </div>
        )}
      </div>
      {/* {loaded && instanceRef.current && (
        <div className="dots ">
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
      )} */}
    </>
  );
};

export default TwoServiceCard;

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
