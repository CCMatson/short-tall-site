import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <div id='socials' className="flex flex-col items-center justify-center pt-6 max-w-[20] w-full mb-8" >
      <h1 className="text-4xl font-bold text-center text-customPink font-luckiest-guy">
        Contact Us On Instagram
      </h1>
      <a
        href="http://www.instagram.com/shortandtallproductions"
        target="_blank"
        rel="nooper noreferrer"
      >
        <div className="flex items-center">
          <FaInstagram className="cursor-pointer m-2 mb-2" size={40} />
        </div>
      </a>
      <div className="text-center">
        <h3>@ShortAndTallProductions</h3>
      </div>
    
    </div>
  );
};

export default Contact;
