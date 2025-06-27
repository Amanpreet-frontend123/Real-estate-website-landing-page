import React from "react";
import homeImg from "../assets/homeimg2.png";
import Button from "./Button";
import herosection from "../Json/Herosection";

const Herosection = () => {
  return (
    <>
      <div className="ps-[50px] w-full sm:ps-[120px] column-reverse sm:flex justify-between bg-linear-to-r from-[#222222] to-[#474747] h-[850px] text-white ">
        <div className="container">
          <div className=" font-[500] pt-[20px] sm:ms-[120px] sm:mt-[75px]">
            <h1 className="text-[32px] sm:text-[64px] ">{herosection.title1}</h1>
            <h1 className="text-[32px] sm:text-[64px]    ">{herosection.title2}</h1>
            <h1 className="text-[32px] sm:text-[64px]    ">{herosection.title3}</h1>
            <p className="text-[#C4C4C4] leading-[30px] text-balance sm:text-left sm:text-[18px]  font-[500] sm:leading-[50px] max-w-150 mt-[24px]">
              {herosection.description}
            </p>
            <Button>{herosection.herosectionButton}</Button>
            <div className="relative flex gap-[30px] sm:gap-[50px] sm:max-w-50 sm:max-w-[381px] sm:h-[113px] leading-[25px] mt-[43px]">
              <h2 className="text-[36px] font-[700]">
                {herosection.Number1}
                <span className="text-[#2387C0] text-[36px] font-[700] ">
                  {herosection.sign}
                </span>
                <br />
                <span className="text-[#C4C4C4] text-[18px] font-[600] mt-10">
                  {herosection.text1}
                </span>
              </h2>
              <h2 className="text-[36px] font-[700]">
                {herosection.Number2}
                <span className="text-[#2387C0] text-[36px] font-[700]">
                  {herosection.sign}
                </span>
                <br />
                <span className="text-[#C4C4C4] text-[18px] font-[600]">
                  {herosection.text2}
                </span>
              </h2>
              <h2 className="text-[36px] font-[700]">
                {herosection.Number3}
                <span className="text-[#2387C0] text-[36px] font-[700]">
                  {herosection.sign}
                </span>
                <br />
                <span className="text-[#C4C4C4] text-[18px] font-[600]">
                  {herosection.text3}
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className=" -ms-100 ">
          <img
            src={homeImg}
            alt=""
            className= "hidden lg:block sm:visible sm:ms-[90px] sm:w-[698px] sm:h-[987px] sm:-mt-[137px] scale-x-[-1]" 
          />
          <div className="absolute mt-[60px] sm:-mt-[165px] ms-[400px] sm:ms-12 pt-12 p-5 sm:p-10   gap-10 h-[166px] max-w-[380px] sm:h-[166px]  sm:max-w-[745px] bg-gradient-to-r from-[#399FD8] via-[#0775B4] to-[#003756]  flex ">
            <div>
              <h2 className="sm:text-[24px] font-[500px] sm:leading-[50px]">
                {herosection.imgdivdecs1}
              </h2>
            </div>
            <div>
              <h2 className="sm:text-[36px] font-[700] sm:leading-[50px]">
                {herosection.imgdivdecs2}
              </h2>
            </div>
            <div>
              <p className=" sm:max-w-200 leading-[15px] text-[10px] sm:leading-[40px] sm:text-[14px] font-[400]">
                {herosection.imgdivdecs3}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
