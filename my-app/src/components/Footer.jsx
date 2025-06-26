import React from "react";
import footer from "../Json/Footer";
import SliderComponent from "./Slider";

const Footer = () => {
  return (
    <>
      <div className="-ps-100 h-[769px]  bg-linear-to-r from-[#222222] to-[#474747]   sm:w-full bg-linear-to-r from-[#222222] to-[#474747]">
        <SliderComponent />
        <div className="container  -ps-100 sm:ps-50 flex h-[769px] w-full  sm:h-[769px] sm:w-full">
          <div className="pt-100">
            <h3 className="text-white font-[600] text-[16px] p-5">
              {footer.heading}
            </h3>
            <p className="text-white max-w-150 text-[16px] font-[400] p-5">
              {footer.desc}
            </p>
            <div className="flex  gap-5">
              {footer.logo.map((item) => (
                <img src={item.img} className="h-[18px] w-[16px] ms-5 mt-5" />
              ))}
            </div>
          </div>
          <div className="text-white gap-50 ps-[60px] pt-100">
            <h3 className="font-[700] text-[18px]  ">{footer.heading2}</h3>
            {footer.heading2Data.map((item) => (
              <div>
                <p className="font-[400] mt-5 text-[16px]">{item.title}</p>
              </div>
            ))}
          </div>
          <div className="text-white  max-w-[165px] w-full h-[262px] ps-[80px] pt-100">
            <h3 className="font-[700] text-[18px]"> {footer.heading3}</h3>
            {footer.heading3Data.map((item) => (
              <p className="font-[400] mt-5 text-[16px]" key={item.id}>
                {item.title}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
