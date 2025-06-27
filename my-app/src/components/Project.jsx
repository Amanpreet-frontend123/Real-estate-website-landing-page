import React from "react";
import project from "../Json/Project";

const Project = () => {
  return (
    <div className="ms-[200px] sm:container sm:ms-[360px] mb-[500px]">
      <h1 className=" max-w-200 text-[28px] font-[600] mb-10 leading-[50px] sm:max-w-100 sm:leading-[62px] sm:text-[46px] sm:font-[600] sm:mb-10">
        {project.title}
      </h1>

      <div className="flex flex-wrap justify-center  gap-[30px] max-w-[1202px] w-full h-[478px]">
        {project.data.map((item, index) => (
          <div
            key={index}
            className="relative group max-w-[278px] h-[478px] overflow-hidden  shadow-md"
          >
            <img
              src={item.url}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <div className="absolute bottom-0 left-0  bg-white max-w-[253px] w-full h-[88px] m-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
              <h2 className="text-lg font-semibold text-gray-900">
                {item.name}
              </h2>
              <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
