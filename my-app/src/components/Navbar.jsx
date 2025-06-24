import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="container flex justify-between bg-black text-white">
        <div className="items-start  ms-[120px] mt-[48px]">
          <h4 className="text-[18px]">General</h4>
          <h1 className="text-[24px] text-blue-400">Project</h1>
        </div>
        <div className="me-[100px] mt-10 ">
          <ul className="font-[700px] text-[18px]  flex items-end gap-[60px] font-semibold text-gray-400 ">
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
