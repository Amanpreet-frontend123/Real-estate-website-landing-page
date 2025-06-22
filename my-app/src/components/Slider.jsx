import React,{useRef} from "react";
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
    <div className="absolute  columns-2 bg-gradient-to-r from-black to-zinc-900 text-white h-[566px] w-[1064px] -mt-90  ms-[288px]  md:px-16">
      <div className="">
        <Slider ref={sliderRef} {...settings}>
          {slider.data.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center gap-6">
              <img src={item.image} alt={item.name} className="w-[269px] h-[344px] object-cover ms-[59px] mt-[65px]" />
              <div className="bg-white text-black p-6  relative -mt-25 ms-[197px] w-[263px] h-[171px] ]">
                <div className="absolute -top-11 left-6 w-[62px] h-[62px] ms-[85px] rounded-full bg-white text-blue-500 flex items-center justify-center text-lg font-bold"><img src={slider.commaImg} /></div>
                <h3 className="text-xl font-semibold text-center">{item.name}</h3>
                <p className="text-gray-700 mt-2 text-justify">{item.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="">
        <h2 className=" text-[36px] font-[600px] pt-20 leading-[60px] max-w-100 md:text-4xl  mb-4">{slider.title}</h2>
        <p className="text-[#C4C4C4] text-[18px] font-[500px] pt-5 mb-8 text-justify leading-[50px] max-w-xl">{slider.desc}</p>
        <div className="flex justify-center gap-[51px] mt-20 -me-50 ">
          <img
            src={slider.arrowLeft}
            alt="Prev"
            onClick={() => sliderRef.current.slickPrev()}
            className="w-[25px] h-[25px]  cursor-pointer hover:bg-[#0A72AD]"
          />
          <img
            src={slider.arrowRight}
            alt="Next"
            onClick={() => sliderRef.current.slickNext()}
            className="w-[25px] h-[25px] cursor-pointer  hover:bg-[#0A72AD]"
          />
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;



