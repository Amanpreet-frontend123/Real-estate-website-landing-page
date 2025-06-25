import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between bg-linear-to-r from-[#222222] to-[#474747] text-white pt-[48px]">
        <div className="items-start  ms-[120px] mt-[48px]">
          <h4 className="text-[18px] font-[700px]">General</h4>
          <h1 className="text-[24px] font-[700px] text-[#0A72AD]">Project</h1>
        </div>
        <div className="me-[224px] pt-[48px] ms-[340px]">
          <ul className="font-[500px] text-[18px]  flex  gap-[90px] font-semibold text-[#C4C4C4] ">
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
    </>
  );
};

export default Navbar;
