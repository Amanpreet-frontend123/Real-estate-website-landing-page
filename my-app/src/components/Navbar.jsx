import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(true);

  const toggleNavbar = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="flex justify-between bg-linear-to-r from-[#222222] to-[#474747] text-white sm:pt-[108px]">
        <div className="container max-w-[10px] mt-[20px] w-full sm:max-w-[87px] sm:h-[66px]">
          <div className=" items-start ms-[50px] mt-[20px] sm:-mt-[50px] sm:-ms-[10px] ">
            <h4 className="text-[18px] font-[700] ">General</h4>
            <h1 className="text-[24px] font-[700] text-[#0A72AD]">Project</h1>
          </div>
          <div className="ms-[280px] -mt-[50px] visible sm:hidden">
            <button onClick={toggleNavbar} className="block">
              <img
                src="https://cdn-icons-png.flaticon.com/128/15631/15631150.png"
                className=" ms-[100px] h-[50px] w-[50px] bg-white cursor-pointer"
              />
            </button>
          </div>
          <div
            className={`${
              open ? "active" : ""
            } sm:-mt-[66px] sm:ms-[300px] hidden`}
          >
            <ul className="font-[500px] text-[18px]  flex  sm:gap-[50px] font-semibold text-[#C4C4C4] ">
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
