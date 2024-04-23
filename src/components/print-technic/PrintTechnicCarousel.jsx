import { useKeenSlider } from "keen-slider/react";
// import Image from "next/image";
import { useState } from "react";
// import heroOne from "@/assets/home/heroCarouselImg/heroOne.png";
// import { LiaLongArrowAltRightSolid } from "react-icons/lia";
// import Link from "next/link";

const PrintTechnicCarousel = () => {
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
          <div className="keen-slider__slide">
            <video
              className="w-full h-[50vh] md:h-[80vh] object-cover"
              autoPlay
              loop
              muted
              src={require("../../assets/videos/print/slideOne.mp4")}
            />
          </div>
          <div className="keen-slider__slide">
            <video
              className="w-full h-[50vh] md:h-[80vh] object-cover"
              autoPlay
              loop
              muted
              src={require("../../assets/videos/print/slideTwo.mp4")}
            />
          </div>
          <div className="keen-slider__slide">
            <video
              className="w-full h-[50vh] md:h-[80vh] object-cover"
              autoPlay
              loop
              muted
              src={require("../../assets/videos/print/slideThree.mp4")}
            />
          </div>
          <div className="keen-slider__slide">
            <video
              className="w-full h-[50vh] md:h-[80vh] object-cover"
              autoPlay
              loop
              muted
              src={require("../../assets/videos/print/slideFour.mp4")}
            />
          </div>
          <div className="keen-slider__slide">
            <video
              className="w-full h-[50vh] md:h-[80vh] object-cover"
              autoPlay
              loop
              muted
              src={require("../../assets/videos/print/slideFive.mp4")}
            />
          </div>
        </div>
        {loaded && instanceRef.current && (
          <div className="hidden sm:block">
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
        <div className="dots relative -top-10 left-1/2 transform -translate-x-1/2">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={
                  "dot hidden sm:block" +
                  (currentSlide === idx ? " active" : "")
                }
              ></button>
            );
          })}
        </div>
      )}
    </>
  );
};

export default PrintTechnicCarousel;

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
