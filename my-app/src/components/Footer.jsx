import React from "react";
import footer from "../Json/Footer";
import Slider from "./Slider";

const Footer = () => {
  return (
    <>
    
        <Slider/>
        
      <div className="flex h-14 bg-linear-to-r from-[#222222] to-[#474747] h-[769px] p-50 pt-100 tracking-wider ">
<div className="">
        <h3 className="text-white font-[600px] text-[16px] p-5">{footer.heading}</h3>
        <p className="text-white max-w-150 text-[16px] font-[400px] p-5">{footer.desc}</p>
        <div className="flex  gap-5">
        {footer.logo.map((item) => (
          <img src={item.img} className="h-[18px] w-[16px] ms-5 mt-5" />
        ))}
        </div>
      </div>
      <div className="text-white gap-50 ps-50">
       <h3 className="font-[700px] text-[18px] ">{footer.heading2}</h3> 
        {footer.heading2Data.map((item)=>(<div ><p className="font-[400px] mt-5 text-[16px]">{item.title}</p></div>))}
      
      </div>
      <div className="text-white ps-50 w-[165px] h-[262px]">
       <h3 className="font-[700px] text-[18px]"> {footer.heading3}</h3>
        {footer.heading3Data.map((item)=>(<p className="font-[400px] mt-5 text-[16px]" key={item.id}>{item.title}</p>))}
      </div>
      </div>
      </>
  );
};

export default Footer;
