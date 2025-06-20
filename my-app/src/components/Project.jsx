import React from "react";
import project from "../Json/Project";

const Project = () => {
  return (
    <>
      <div className="container ms-20">
        <h1 className="text-[46px] font-[600px] max-w-80 ms-40">
          {project.title}
        </h1>
        <div className="flex justify-evenly  ms-60 p-10 gap-10">
          {project.data.map((item) => (
            <img src={item.url} className="w-[278px] h-[478px]" />
          ))}
        </div>
        <div className="h-[88px] w-[253px] border-2 border-black p-8 ps-25  ">
          <h1>{project.data1}</h1>
          <p>{project.desc1}</p>
          <img
            className="absolute bg-[#0A72Ad] h-[57px] w-[57px] -mt-15 ms-20"
            src={project.signImg}
          />
        </div>
      </div>
    </>
  );
};

export default Project;

// absolute inset-0 bg-black bg-opacity-60 text-white flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300
