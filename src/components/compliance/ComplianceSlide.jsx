import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";

const ComplianceSlide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

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
              src={require("../../assets/videos/Compliance/sliderOne.mp4")}
            />
          </div>
          <div className="keen-slider__slide">
            <video
              className="w-full h-[50vh] md:h-[80vh]  object-cover"
              autoPlay
              loop
              muted
              src={require("../../assets/videos/Compliance/sliderTwo.mp4")}
            />
          </div>
          <div className="keen-slider__slide">
            <video
              className="w-full h-[50vh] md:h-[80vh] object-cover"
              autoPlay
              loop
              muted
              src={require("../../assets/videos/Compliance/sliderThree.mp4")}
            />
          </div>
          <div className="keen-slider__slide">
            <video
              className="w-full h-[50vh] md:h-[80vh] object-cover"
              autoPlay
              loop
              muted
              src={require("../../assets/videos/Compliance/sliderFour.mp4")}
            />
          </div>
          <div className="keen-slider__slide">
            <video
              className="w-full h-[50vh] md:h-[80vh] object-cover"
              autoPlay
              loop
              muted
              src={require("../../assets/videos/Compliance/sliderFive.mp4")}
            />
          </div>
        </div>
        {loaded && instanceRef.current && (
          <>
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
          </>
        )}
      </div>
      {/* {loaded && instanceRef.current && (
        <div className="dots">
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
export default ComplianceSlide;
function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
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
