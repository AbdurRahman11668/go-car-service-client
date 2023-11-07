import { Link } from "react-router-dom";

const PopularService = ({ service }) => {
  const {
    _id,
    service_name,
    image,
    description,
    area,
    price,
    provider_name,
    provider_image,
  } = service;
  return (
    <div>
      <div className="card mx-auto bg-base-100 shadow-xl mt-5">
        <figure className="px-10 pt-10">
          <img src={image} alt="Car" className="rounded-lg" />
        </figure>
        <div className="card-body px-12">
          <h2 className="card-title text-[#df3437]">{service_name}</h2>
          {description.length > 100 ? (
            <p className="text-gray-600">{description.slice(0, 100)}</p>
          ) : (
            <p>{description}</p>
          )}
          <div className="flex items-center space-x-3">
            <img className="w-10 rounded-full" src={provider_image} alt="" />
            <h5 className="font-medium">{provider_name}</h5>
          </div>
          <p className="text-[#df3437] font-semibold">Price: {price}</p>
          <div className="card-actions">
            <Link to={`/servicedetails/${_id}`}>
              <button className="px-8 py-2 bg-[#df3437] hover:bg-transparent hover:border-2 border-2 border-[#df3437] text-lg font-medium text-white hover:text-[#df3437] mt-5 rounded">
                Full Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularService;
