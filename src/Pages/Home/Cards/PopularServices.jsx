import { Link } from "react-router-dom";
import useServices from "../../../hooks/useServices";
import PopularService from "./PopularService";

const PopularServices = () => {
  const services = useServices();
  return (
    <div className="px-20">
      <div className="mt-5">
        <div className="text-center">
          <h3 className="text-4xl font-bold text-[#df3437]">
            Popular Services
          </h3>
          <img
            className="mx-auto mt-4"
            src="https://i.ibb.co/z2H2Ydj/header-border.webp"
            alt=""
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.slice(0, 4).map((service) => (
            <PopularService
              key={service._id}
              service={service}
            ></PopularService>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-5 mb-10">
        <Link to={`/services`}>
          <button className="px-8 py-2 bg-[#df3437] hover:bg-transparent hover:border-2 border-2 border-[#df3437] text-lg font-medium text-white hover:text-[#df3437] mt-8 rounded">
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PopularServices;
