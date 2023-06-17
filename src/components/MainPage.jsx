// import React from 'react'
import { TypeAnimation } from "react-type-animation";
import { FaInstagram } from "react-icons/fa";

const MainPage = () => {
  return (
    <div id="main" className="flex justify-center items-center h-screen">
      <img className="max-h-full" src="https://i.imgur.com/Pq4kG2a.jpg" />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/75">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800 font-luckiest-guy">
            Short and Tall Productions
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            We Are
            <TypeAnimation
              sequence={[
                "Roxanne and Lysol",
                2000,
                "Producers Based In SF, CA",
                2000,
                "Drag Performers",
                2000,
                "Short and Tall",
                2000,
                "Rebel Rebels",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              speed={50}
              style={{
                fontSize: "1em",
                paddingLeft: "5px",
                display: "inline-block",
              }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-center pt-6 max-w-[20] w-full">
            <a
              href="http://www.instagram.com/shortandtallproductions"
              target="_blank"
              rel="nooper noreferrer"
            >
              <FaInstagram className="cursor-pointer" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
