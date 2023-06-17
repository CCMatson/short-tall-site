import { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineHome,
  // AiOutlineTrophy,
  AiOutlineCrown,
  AiOutlineInstagram,
  AiOutlineStar,
} from "react-icons/ai";

const SideNav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    // console.log("state changed");
  };

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden"
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
          <a
            onClick={handleNav}
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 curser-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            onClick={handleNav}
            href="#about"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 curser-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineStar size={20} />
            <span className="pl-4">About</span>
          </a>
          <a
            onClick={handleNav}
            href="#performance"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 curser-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineCrown size={20} />
            <span className="pl-4">Performance</span>
          </a>
          {/* This will take user to sign up for email marketing */}
          {/* <a
            onClick={handleNav}
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 curser-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineTrophy size={20} />
            <span className="pl-4">Contact</span>
          </a> */}
          <a
            onClick={handleNav}
            href="#socials"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 curser-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineInstagram size={20} />
            <span className="pl-4">Socials</span>
          </a>
        </div>
      ) : (
        ""
      )}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col ml-2">
          <a
            href="#main"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 duration-300"
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="#about"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 duration-300"
          >
            <AiOutlineStar size={20} />
          </a>
          <a
            href="#performance"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 duration-300"
          >
            <AiOutlineCrown size={20} />
          </a>
          {/* <a
            href="#contact"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 duration-300"
          >
            <AiOutlineTrophy size={20} />
          </a> */}
          <a
            href="#socials"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 duration-300"
          >
            <AiOutlineInstagram size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
