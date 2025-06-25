import React from "react";

const Navbar = () => {
  return (
    <>
      <div className=" flex justify-between bg-linear-to-r from-[#222222] to-[#474747] text-white pt-[38px]">
        <div className=" container mt-[20px]">
          <div className="ms-1 items-start  ">
            <h4 className="text-[18px] font-[700]">General</h4>
            <h1 className="text-[24px] font-[700] text-[#0A72AD]">Project</h1>
          </div>
          <div className=" -mt-[56px] ms-[200px]">
            <ul className="font-[500px] text-[18px]  flex  gap-[70px] font-semibold text-[#C4C4C4] ">
              <li className="hover:text-white">Home</li>
              <li className="hover:text-white">Services</li>
              <li className="hover:text-white">Find a team</li>
              <li className="hover:text-white">About us</li>
              <li className="hover:text-white">Articles</li>
              <li className="hover:text-white">Portfolio</li>
              <li className="hover:text-white">Contact us</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
