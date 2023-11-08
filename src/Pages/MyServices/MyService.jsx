import { Link } from "react-router-dom";

const MyService = ({ product, handleDelete}) => {
  const { _id, service_name, image, area, price } = product;
  return (
    <div className="">
      <div className="md:flex text-center md:text-start space-x-5 bg-gray-100  items-center shadow-lg">
        <div className="">
          <img src={image} className="w-[500px] md:w-[300px] rounded" alt="" />
        </div>
        <div className="space-y-1 py-3">
            <h3 className="text-red-600 font-bold text-xl">{service_name}</h3>
          <p className="text-md text-gray-700 font-semibold">{area}</p>
          <p className="text-md pb-3 text-gray-500 font-semibold">
            Price: <span className="text-red-600 font-semibold">{price}</span>
          </p>
          <div className="flex justify-center md:justify-start space-x-5">
            <Link to={`/updateservice/${_id}`}>
            <button className="rounded px-3 text-lg font-semibold text-white bg-red-600 hover:border hover:border-red-600 hover:text-red-600 hover:bg-white">
              Update
            </button></Link>
            <button
                onClick={() => handleDelete(_id)}
              className="rounded px-3 text-lg font-semibold text-white bg-red-600 hover:border hover:border-red-600 hover:text-red-600 hover:bg-white"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyService;
