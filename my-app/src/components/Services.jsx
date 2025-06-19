import React from "react";
import servicess from "../Json/Servicess";

const Services = () => {
  return (
    <>
      <div className="container m-20 ms-50 ">
        <div className="flex justify-evenly columns-2">
          <h1 className=" text-[46px]  max-w-100 m-10">{servicess.title}</h1>
          <p className=" m-10 max-w-110 text-gray-500 leading-10 ">
            {servicess.description}
          </p>
        </div>

        <div className="container flex justify-evenly m-20 ms-5 max-w-screen gap-20">
          {servicess.img.map((image) => (
            <img
              key={image.id}
              src={image.url}
              className="h-[267px] w-[368px]"
            />
          ))}
        </div>
        <div className="flex justify-evenly gap-50 font-bold text-left text-[35px] -mt-5">
          {servicess.imgtitle.map((item) => (
            <h3 key={item.id}>{item.imgtitle}</h3>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-20 m-5  ms-30 text-left text-balance  text-gray-500">
          {servicess.imgdesc.map((item) => (<p key={item.id}>{item.imgdesc}</p>))}
        </div>
      </div>
    </>
  );
};

export default Services;
