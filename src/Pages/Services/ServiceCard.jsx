import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const {
    _id,
    service_name,
    image,
    description,
    price,
    provider_name,
    provider_image,
  } = service;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Car" className="rounded-lg" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{service_name}</h2>
          <p className="text-[#df3437] font-semibold">Price: {price}</p>
          <div className="card-actions">
            <Link to={`/book/${_id}`}>
              <button className="btn btn-primary">Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
