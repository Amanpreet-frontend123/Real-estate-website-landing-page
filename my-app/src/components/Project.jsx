import React from "react";
import project from "../Json/Project";

const Project = () => {
  return (
    <div className="container ms-[120px] mb-[500px]">
      <h1 className="text-start  max-w-80 leading-[62px] text-[46px] font-[600px] mb-10">{project.title}</h1>

      <div className="flex flex-wrap justify-center  gap-[30px] w-[1202px] h-[478px]">
        {project.data.map((item, index) => (
          <div
            key={index}
            className="relative group w-[278px] h-[478px] overflow-hidden  shadow-md"
          >

            <img
              src={item.url}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <div className="absolute bottom-0 left-0  bg-white w-[253px] h-[88px] m-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
              <h2 className="text-lg font-semibold text-gray-900">{item.name}</h2>
              <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;





