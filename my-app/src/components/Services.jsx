import React from "react";
import servicess from "../Json/Servicess";
import Card from './Card';

const Services = () => {
  return (
    <>
    <div className="bg-[#F6F6F6CC] -mt-[100px] sm:mt-[0px] pt-[40px] sm:pt-[80px]">
      <div className="container">
      <div className=" w-full h-full sm:h-[926px] me-[130px] ">
        <div className="column-reverse sm:flex">
          <h1 className="ms-[50px] sm:ms-[40px] text-[32px] sm:text-[46px] font-[600]  min-w-[50px] sm:max-w-150 ">{servicess.title}</h1>
          <p className="ms-[50px] min-w-100 leading-8 mt-[15px] sm:mt-[0px] sm:ms-[321px] text-[18px] font-[500px] sm:max-w-140  text-[#C4C4C4] sm:leading-10 ">
            {servicess.description}
          </p>
        </div>
<div className="sm:flex mt-[20px] ms-[50px] sm:ms-[0px] sm:mt-[80px]">
  {servicess.data?.map((item) => (
          <Card 
            key={item.id}
            img={item.url}
            title={item.imgtitle}
            desc={item.imgdesc}
             page="ser"
             titleSize="ser"
          />
        ))}
        </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default Services;
