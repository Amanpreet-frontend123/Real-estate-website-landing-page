import React, { useRef } from "react";
import Slider from "react-slick";
import slider from "../Json/Slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="container">
      <div className="absolute  columns-2 bg-gradient-to-r from-black to-zinc-900 text-white h-[566px] max-w-[1064px] -mt-90 -ms-[100px] sm:ms-[80px]   2xl:px-16">
        <div className="">
          <Slider ref={sliderRef} {...settings}>
            {slider.data.map((item, index) => (
              <div
                key={index}
                className="ms-[10px] sm:-ms-[50px] flex flex-col 2xl:flex-row "
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[200px] h-[344px] sm:w-[269px] h-[344px] object-cover ms-[59px] mt-[65px]"
                />
                <div className="bg-white sm:bg-white text-black p-6  relative -mt-25 ms-[197px] w-[263px] h-[171px] ]">
                  <div className="absolute -top-11 left-6 w-[62px] h-[62px] ms-[85px] rounded-full bg-white text-blue-500 flex items-center justify-center text-lg font-bold">
                    <img src={slider.commaImg} />
                  </div>
                  <h3 className="text-[22px] font-[600] mt-[13px] text-center">
                    {item.name}
                  </h3>
                  <p className="text-[13px] font-[400] mt-[7px] text-justify text-[#939393]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="">
          <h2 className="text-[36px] font-[600] pt-20 ms-[] leading-[50px] max-w-120 2xl:text-4xl  mb-4">
            {slider.title}
          </h2>
          <p className="-ms-[10px] max-w-110 leading-[20px] sm:text-[#C4C4C4] text-[18px] font-[500px] mt-[44px] mb-8 text-justify leading-[50px] max-w-110">
            {slider.desc}
          </p>
          <div className="sm:flex ms-[320px] mt-10 gap-5">
            <div className="h-[57px] max-w-[57px] hover:bg-[#0A72AD]">
              <img
                src={slider.arrowLeft}
                alt="Prev"
                onClick={() => sliderRef.current.slickPrev()}
                className="absolute mt-5 ms-3 w-[25px] h-[25px]  cursor-pointer  "
              />
            </div>
            <div className="h-[57px] max-w-[57px] hover:bg-[#0A72AD]">
              <img
                src={slider.arrowRight}
                alt="Next"
                onClick={() => sliderRef.current.slickNext()}
                className="absolute mt-5 ms-3 w-[25px] h-[25px] cursor-pointer "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
