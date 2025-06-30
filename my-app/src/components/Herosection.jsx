import React from "react";
import homeImg from "../assets/homeimg2.png";
import Button from "./Button";
import herosection from "../Json/Herosection";

const Herosection = () => {
  return (
    <>
      <div className="ps-[50px]  md:ps-[50px]  pt-[50px] 2xl:pt-[0px]   2xl:flex justify-between bg-linear-to-r from-[#222222] to-[#474747] min-h-screen md:min-h-auto lg:min-h-auto xl:min-h-auto 2xl:min-h-auto 2xl:h-[900px] text-white ">
        <div className="container content-center p-10 ">
          <div className="row items-center md:flex wrap-normal">
            <div className=" font-[500] pt-[20px] 2xl:ms-[120px] 2xl:mt-[75px]">
              <h1 className="text-[32px] 2xl:text-[64px] ">
                {herosection.title1}
              </h1>
              <h1 className="text-[32px] 2xl:text-[64px]    ">
                {herosection.title2}
              </h1>
              <h1 className="text-[32px] 2xl:text-[64px]    ">
                {herosection.title3}
              </h1>
              <p className="text-[#C4C4C4] leading-[30px] md:leading-[30px] md:max-w-100 lg:max-w-100 xl:max-w-150 2xl:max-w-150 text-balance 2xl:text-left 2xl:text-[18px]  font-[500] lg:leading-[30px] xl:leading-[40px] 2xl:leading-[50px]  mt-[24px]">
                {herosection.description}
              </p>
              <Button>{herosection.herosectionButton}</Button>
              <div className="relative flex gap-[10px] 2xl:gap-[50px]  2xl:max-w-[381px] 2xl:h-[113px] leading-[25px] mt-[43px]">
                <h2 className="text-[18px] 2xl:text-[36px] font-[700]">
                  {herosection.Number1}
                  <span className="text-[#2387C0] text-[18px] 2xl:text-[36px] font-[700]">
                    {herosection.sign}
                  </span>
                  <br />
                  <span className="text-[#C4C4C4] text-[12px] 2xl:text-[18px] font-[600] mt-10">
                    {herosection.text1}
                  </span>
                </h2>
                <h2 className="text-[18px] 2xl:text-[36px] font-[700]">
                  {herosection.Number2}
                  <span className="text-[#2387C0] text-[18px] 2xl:text-[36px] font-[700]">
                    {herosection.sign}
                  </span>
                  <br />
                  <span className="text-[#C4C4C4] text-[12px] 2xl:text-[18px] font-[600]">
                    {herosection.text2}
                  </span>
                </h2>
                <h2 className="text-[18px] 2xl:text-[36px] font-[700]">
                  {herosection.Number3}
                  <span className="text-[#2387C0] text-[18px] 2xl:text-[36px] font-[700]">
                    {herosection.sign}
                  </span>
                  <br />
                  <span className="text-[#C4C4C4] text-[12px] 2xl:text-[18px] font-[600]">
                    {herosection.text3}
                  </span>
                </h2>
              </div>
            </div>

            <div className="md:absolute lg:absolute xl:absolute 2xl:absolute md:right-0 me-[10px] xl:me-[0px] 2xl:me-[0px]  md:mt-[150px] right-0 lg:mt-[130px] xl:-mt-[60px] 2xl:-mt-[0px] overflow-hidden">
              <img
                src={homeImg}
                alt=""
                className="hidden  md:block md:visible  md:-mt-[150px] md:right-0  md:h-[600px]  md:w-[400px] lg:h-[600px] lg:w-[450px] lg:-mt-[150px] xl:h-[698px] xl:w-[450px] xl:-mt-[50px] xl:right-0 2xl:visible 2xl:ms-[90px] 2xl:w-[698px] 2xl:h-[987px] 2xl:-mt-[137px] scale-x-[-1]"
              />
              <div className="md:absolute lg:absolute xl:absolute 2xl:absolute md:right-0  mt-[40px]  md:me-0 md:-mt-[160px] 2xl:-mt-[165px]   2xl:me-0 lg:right-0 xl:right-0 lg:-ms-1 2xl:ms-12 pt-12 p-5   md:p-5 lg:p-5 xl:p-5 2xl:p-10   gap-10 h-auto md:h-[166px] md:max-w-[400px] lg:h-[166px]  lg:max-w-[490px] xl:h-[166px]  xl:max-w-[745px] 2xl:h-[166px]  2xl:max-w-[745px] bg-gradient-to-r from-[#399FD8] via-[#0775B4] to-[#003756] md:flex lg:flex xl:flex 2xl:flex ">
                <div>
                  <h2 className="text-[24px] font-[500px]  2xl:leading-[50px]">
                    {herosection.imgdivdecs1}
                  </h2>
                </div>
                <div>
                  <h2 className="text-[24px] 2xl:text-[36px] font-[700] mt-[10px] 2xl:mt-[0px] 2xl:leading-[50px]">
                    {herosection.imgdivdecs2}
                  </h2>
                </div>
                <div>
                  <p className="max-w-70 md:min-w-50 xl:max-w-100 2xl:max-w-200 leading-[15px]  mt-[10px] 2xl:mt-[0px] text-[10px] 2xl:leading-[30px] 2xl:text-[14px] font-[400]">
                    {herosection.imgdivdecs3}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
