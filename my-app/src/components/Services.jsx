import React from "react";
import servicess from "../Json/Servicess";
import Card from './Card';

const Services = () => {
  return (
    <>
      <div className="container ms-[120px] ">
        <div className="flex">
          <h1 className=" text-[46px]  max-w-100 ">{servicess.title}</h1>
          <p className=" ms-[321px] max-w-110 text-gray-500 leading-10 ">
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
          />
        ))}
        </div>
      </div>
    </>
  );
};

export default Services;
