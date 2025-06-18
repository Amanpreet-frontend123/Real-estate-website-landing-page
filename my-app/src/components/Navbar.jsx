import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between bg-black text-white">
        <div className="items-start ms-20 mt-10">
          <h4 className="text-xl">General</h4>
          <h1 className="text-3xl text-blue-400">Project</h1>
        </div>
        <div className="me-10 mt-10">
          <ul className="flex items-end gap-15 font-semibold">
            <li className="hover:text-blue-400">Home</li>
            <li className="hover:text-blue-400">Services</li>
            <li className="hover:text-blue-400">Find a team</li>
            <li className="hover:text-blue-400">About us</li>
            <li className="hover:text-blue-400">Articles</li>
            <li className="hover:text-blue-400">Portfolio</li>
            <li className="hover:text-blue-400">Contact us</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
