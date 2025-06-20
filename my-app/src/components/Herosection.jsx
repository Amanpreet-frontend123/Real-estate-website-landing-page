import React from "react";
import homeImg from "../assets/homeimg2.png";
import Button from "./Button";
import herosection from "../Json/Herosection";

const Herosection = () => {
  return (
    <>
      <div className="container mx-auto px-4 bg-black text-white tracking-tight w-[2071px] h-[976px] flex justify-between">
        <div className="container">
          <h1 className="text-[64px] leading-[100%] tracking-tight  ms-20 m-10">
            {herosection.title1}
            </h1>
            <h1 className="text-[64px] leading-[100%] tracking-tight ms-20 m-10">
            {herosection.title2}
          </h1>
          <h1 className="text-[64px] leading-[100%] tracking-tight ms-20 m-10">
            {herosection.title3}
          </h1>
          <p className="text-lg text-balance  tracking-tight  m-20">{herosection.description}</p>
          <Button>{herosection.herosectionButton}</Button>
          <div className="flex gap-20 ms-20 mt-20">
            <h2 className="text-4xl font-bold">
              {herosection.Number1}<span className="text-blue-400 font-bold">{herosection.sign}</span>
              <br />
              <span className="font-light text-lg">{herosection.text1}</span>
            </h2>
            <h2 className="text-4xl font-bold">
             {herosection.Number2} <span className="text-blue-400 font-bold">{herosection.sign}</span>
              <br />
              <span className="font-light text-lg">{herosection.text2}</span>
            </h2>
            <h2 className="text-4xl font-bold">
              {herosection.Number3}<span className="text-blue-400 font-bold">{herosection.sign}</span>
              <br />
              <span className="font-light text-lg">{herosection.text3}</span>
            </h2>
          </div>
        </div>

        <div className="container" >
          <img src={homeImg} alt="" className="w-[298px] md:w-[498px] lg:w-[698px] h-[987px] -mt-50" />
          <div className="absolute -m-30  p-10   gap-10 h-[144px] w-[745px]  bg-linear-to-r from-cyan-500 to-blue-500 flex justify-evenly">
            <div>
              <h2 className="text-4xl">
                {herosection.imgdivdecs1}
              </h2>
            </div>
            <div>
              <h2 className="text-4xl ">
               {herosection.imgdivdecs2}
              </h2>
            </div>
            <div>
              <p className="text-balance">
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
