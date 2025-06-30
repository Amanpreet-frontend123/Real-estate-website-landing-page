import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleNavbar = () => {
    console.log('open', open)
    setOpen(!open);
  };

  return (
    <>
      <div className="flex justify-between bg-linear-to-r from-[#222222] to-[#474747] text-white sm:pt-[122px]">
        <div className="container  max-w-[10px] mt-[20px] w-full sm:max-w-[87px] sm:h-[66px]">
          <div className=" items-start ms-[50px] mt-[20px] sm:-mt-[50px] sm:-ms-[10px] ">
            <h4 className="text-[18px] font-[700] ">General</h4>
            <h1 className="text-[24px] font-[700] text-[#0A72AD]">Project</h1>
          </div>
          <div className="ms-[280px] -mt-[50px] ">
            <button onClick={toggleNavbar} className="block visible sm:hidden">
              <img
                src="https://cdn-icons-png.flaticon.com/128/15631/15631150.png"
                className=" ms-[100px] -mt-[10px] h-[40px] w-[40px] bg-gray-200 cursor-pointer"
              />
            </button>
          </div>
          <div
            className={`${
              open ? "active" : "hidden"
            } sm:-mt-[66px] sm:active sm:ms-[300px] `}
          >
            <ul className="font-[500] text-[18px] text-black ps-5 w-[150px] sm:ps-0 bg-white sm:bg-transparent  ms-[280px] sm:ms-[0px] sm:flex  sm:gap-[50px] font-semibold sm:text-[#C4C4C4] ">
              <li className="hover:text-white pt-2 sm:pt-0">Home</li>
              <li className="hover:text-white pt-2 sm:pt-0">Services</li>
              <li className="hover:text-white pt-2 sm:pt-0">Find a team</li>
              <li className="hover:text-white pt-2 sm:pt-0">About us</li>
              <li className="hover:text-white pt-2 sm:pt-0">Articles</li>
              <li className="hover:text-white pt-2 sm:pt-0">Portfolio</li>
              <li className="hover:text-white pt-2 sm:pt-0">Contact us</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
