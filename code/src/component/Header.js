import { useState } from "react";
import om from "../images/om.png";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [Toggle, setToggle] = useState(false);

  return (
    <div>
      <div className=" flex  max-w-[1240px]  justify-between text-[#416141]  m-auto md:p-6 md:px-14 px-6  md:py-3 py-0  bg-slate-50 fixed w-full ">
        <div className="font-sans font-bold text-[20px] md:px-10 mt-8 md:pb-0 pb-1 md:pl-0">
          @21keshav_choudhari
        </div>

        <div className="mt-[34px] font-bold">
          {Toggle ? (
            <AiOutlineClose
              onClick={() => setToggle(!Toggle)}
              className=" md:hidden block text-[26px] font-bold"
            />
          ) : (
            <AiOutlineMenu
              onClick={() => setToggle(!Toggle)}
              className=" md:hidden block text-[26px] font-bold"
            />
          )}
        </div>

        <ul className=" md:flex hidden justify-around items-center gap-4 md:mr-12 font-mono font-bold mt-2 ">
          <li className=" hover:bg-[#688f68] font-bold md:p-2  p-4 rounded-lg cursor-pointer hover:text-white shadow-lg text-[#416141]">
            Home
          </li>
          <li className=" hover:bg-[#688f68] md:p-2  p-4 rounded-lg cursor-pointer font-bold hover:text-white shadow-lg text-[#416141]">
            About
          </li>
          <li className=" hover:bg-[#688f68] md:p-2  p-4 rounded-lg cursor-pointer font-bold hover:text-white shadow-lg text-[#416141]">
            Skills
          </li>
          <li className=" hover:bg-[#688f68] md:p-2  p-4 rounded-lg cursor-pointer font-bold hover:text-white shadow-lg text-[#416141]">
            Project
          </li>
          <li className=" hover:bg-[#688f68] md:p-2  p-4 rounded-lg cursor-pointer font-bold hover:text-white shadow-lg text-[#416141]">
            Contact
          </li>
        </ul>

        {/* REsponsive MEnu */}

        <ul
          className={`duration-300 md:hidden w-full h-screen text-white fixed bg-black ${
            Toggle ? "left-[0]" : "left-[-100%]"
          } mt-24`}
        >
          <li className=" hover:bg-[#688f68] w-full font-bold md:p-2  p-4 rounded-lg cursor-pointer hover:text-white shadow-lg text-[#416141]">
            Home
          </li>
          <li className=" hover:bg-[#688f68] w-full md:p-2  p-4 rounded-lg cursor-pointer font-bold hover:text-white shadow-lg text-[#416141]">
            About
          </li>
          <li className=" hover:bg-[#688f68] w-full md:p-2  p-4 rounded-lg cursor-pointer font-bold hover:text-white shadow-lg text-[#416141]">
            Skills
          </li>
          <li className=" hover:bg-[#688f68] w-full md:p-2  p-4 rounded-lg cursor-pointer font-bold hover:text-white shadow-lg text-[#416141]">
            Project
          </li>
          <li className=" hover:bg-[#688f68] w-full md:p-2  p-4 rounded-lg cursor-pointer font-bold hover:text-white shadow-lg text-[#416141]">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
