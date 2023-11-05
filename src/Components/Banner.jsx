import { Typewriter } from "react-simple-typewriter";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div className="flex px-20 items-center pt-10 md:pt-0 flex-col lg:flex-row ">
      <div className="lg:w-1/2 lg:px-20 text-center lg:text-left">
        <h5 className="text-gray-700 hover:text-[#df3437] font-bold text-xl md:text-2xl">
        Your Car Rental Solution
        </h5>
        <h2 className="text-2xl font-bold text-gray-700 pt-3">
          <span className="font-bold text-green-500 text-xl md:text-3xl">
            <Typewriter
              words={["EARN", "CONNECT"]}
              loop={1000}
              cursor
              cursorStyle="/"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
          <br /> AND CONTRIBUTE TO SOCIETY.
        </h2>
        <p className="hidden md:grid mx-auto pt-3 text-gray-500 font-semibold">
        Partner with us to drive your own livelihood and more.
        </p>
        <NavLink to={"/services"}>
          <button
            className="px-8 py-2 bg-[#df3437] hover:bg-transparent hover:border-2 hover:border-[#df3437] text-lg font-medium text-white hover:text-[#df3437] mt-8 rounded"
            style={{ transform: "skew(-205deg)" }}
          >
            <span
              style={{ transform: "skew(205deg)" }}
              className="tracking-wide	"
            >
              SHOP NOW
            </span>
          </button>
        </NavLink>
      </div>
      <img
        className="lg:w-1/2"
        src="https://i.ibb.co/4SVB0gZ/Ouer-Vision.jpg"
        alt=""
      />
    </div>
  );
};

export default Banner;
