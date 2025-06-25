import React from "react";
import servicess from "../Json/Servicess";
import Card from './Card';

const Services = () => {
  return (
    <>
    <div className="bg-[#F6F6F6CC] pt-[80px]">
      <div className="container ms-[120px] w-[1610px] h-[926px] me-[130px] ">
        <div className="flex">
          <h1 className=" text-[46px] font-[600] max-w-100 ">{servicess.title}</h1>
          <p className="ms-[321px] text-[18px] font-[500px] max-w-140  text-[#C4C4C4] leading-10 ">
            {servicess.description}
          </p>
        </div>
<div className="container flex mt-[80px]">
  {servicess.data?.map((item) => (
          <Card 
            key={item.id}
            img={item.url}
            title={item.imgtitle}
            desc={item.imgdesc}
             page="article"
             titleSize="ser"
          />
        ))}
        </div>
      </div>
      </div>
    </>
  );
};

export default Services;
