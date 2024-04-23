import cardOne from "@/assets/home/cardImage/cardOne.png";
import cardTwo from "@/assets/home/cardImage/cardTwo.png";
import cardThree from "@/assets/home/cardImage/cardThree.png";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";

const ThreeServiceCard = () => {
  const [sliderRef] = useKeenSlider(
    {
      slides: {
        perView: 3,
        spacing: 15,
      },
      loop: true,
    }
    // [
    //   (slider) => {
    //     let timeout;
    //     let mouseOver = false;
    //     function clearNextTimeout() {
    //       clearTimeout(timeout);
    //     }
    //     function nextTimeout() {
    //       clearTimeout(timeout);
    //       if (mouseOver) return;
    //       timeout = setTimeout(() => {
    //         slider.next();
    //       }, 3000);
    //     }
    //     slider.on("created", () => {
    //       slider.container.addEventListener("mouseover", () => {
    //         mouseOver = true;
    //         clearNextTimeout();
    //       });
    //       slider.container.addEventListener("mouseout", () => {
    //         mouseOver = false;
    //         nextTimeout();
    //       });
    //       nextTimeout();
    //     });
    //     slider.on("dragStarted", clearNextTimeout);
    //     slider.on("animationEnded", nextTimeout);
    //     slider.on("updated", nextTimeout);
    //   },
    // ]
  );
  return (
    <>
      <div ref={sliderRef} className="mt-[50px] grid grid-cols-3 keen-slider">
        <div className="keen-slider__slide number-slide1">
          <h1 className="absolute bottom-6 text-2xl font-semibold text-white px-4">
            RUBBER PRINT
          </h1>
          <Image src={cardOne} alt="cardOne" className="w-full h-full" />
        </div>
        <div className="keen-slider__slide number-slide2">
          <h1 className="absolute bottom-6 text-2xl font-semibold text-white px-4">
            HD PRINT
          </h1>
          <Image src={cardTwo} alt="cardTwo" className="w-full h-full" />
        </div>

        <div className="keen-slider__slide number-slide3">
          <h1 className="absolute bottom-6 text-2xl font-semibold text-white px-4">
            DISCHARGE PRINT
          </h1>
          <Image src={cardThree} alt="cardThree" className="w-full h-full" />
        </div>

        {/* <div className="keen-slider__slide number-slide4">
          <h1 className="absolute bottom-6 text-4xl font-semibold text-white px-4">
            PHOTO PRINT
          </h1>
          <Image src={cardOne} alt="cardOne" className="w-full h-full" />
        </div> */}
        {/* <div className="keen-slider__slide number-slide5">5</div>
        <div className="keen-slider__slide number-slide6">6</div> */}
        {/* <div className="relative">
          <div className="absolute left-3 bottom-6">
            <h1 className="fluid-h1 font-semibold text-white">
              RUBBER PRINT
            </h1>
          </div>
          <Image src={cardOne} alt="cardOne" className="w-full" />
        </div>
        <div className="relative">
          <div className="absolute left-3 bottom-6">
            <h1 className="text-[34px] font-semibold text-white">HD PRINT</h1>
          </div>
          <Image src={cardOne} alt="cardOne" className="w-full" />
        </div>
        <div className="relative hidden md:block">
          <div className="absolute left-3 bottom-6">
            <h1 className="fluid-h1 font-semibold text-white text-center">
              DISCHARGE PRINT
            </h1>
          </div>
          <Image src={cardOne} alt="cardOne" className="w-full" />
        </div>
        <div className="relative hidden lg:block">
          <div className="absolute left-3 bottom-6">
            <h1 className="fluid-h1 font-semibold text-white text-right ">
              PHOTO PRINT
            </h1>
          </div>
          <Image src={cardOne} alt="cardOne" className="w-full" />
        </div> */}
      </div>
    </>
  );
};

export default ThreeServiceCard;
