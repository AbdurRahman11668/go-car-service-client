import { AiFillCar } from "react-icons/ai";

const Packages = () => {
  return (
    <div className="px-5 lg:px-20 mb-10">
      <div className="text-center space-y-3 mb-5">
        <h3 className="text-3xl font-bold">Our Packages</h3>
        <img
          className="mx-auto"
          src="https://i.ibb.co/z2H2Ydj/header-border.webp"
          alt=""
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="shadow-lg text-center border border-gray-700 p-5 rounded-md">
          <AiFillCar className=" text-7xl mx-auto text-gray-500 border border-gray-600 rounded-full p-2"></AiFillCar>
          <h2 className="py-8 text-3xl font-bold text-[#df3437]">Prime</h2>
          <img
            className="mx-auto pb-4"
            src="https://i.ibb.co/z2H2Ydj/header-border.webp"
            alt=""
          />
          <h3 className="text-2xl">
            $599 <span className="text-sm text-gray-600">/24hour</span>
          </h3>
          <div className="space-y-2 py-4">
            <p className="text-gray-500 font-medium">City trave Prime</p>
            <p className="text-gray-500 font-medium">Ac Vehicle</p>
            <p className="text-gray-500 font-medium">Your Choice 3 Tourism</p>
            <p className="text-gray-500 font-medium">Places</p>
            <p className="text-gray-500 font-medium">Tourist Guide</p>
            <p className="text-gray-500 font-medium">Quality Vehicle</p>
          </div>
          <button className="px-5 py-2 rounded-full font-semibold bg-gray-600 text-white hover:bg-[#df3437]">
            GET NOW
          </button>
        </div>
        <div className="shadow-lg text-center border border-gray-700 p-5 rounded-md">
          <AiFillCar className=" text-7xl mx-auto text-gray-500 border border-gray-600 rounded-full p-2"></AiFillCar>
          <h2 className="py-8 text-3xl font-bold text-[#df3437]">Superior</h2>
          <img
            className="mx-auto pb-4"
            src="https://i.ibb.co/z2H2Ydj/header-border.webp"
            alt=""
          />
          <h3 className="text-2xl">
            $1399 <span className="text-sm text-gray-600">/24hour</span>
          </h3>
          <div className="space-y-2 py-4">
            <p className="text-gray-500 font-medium">
              Any Location Under 400 Km
            </p>
            <p className="text-gray-500 font-medium">Ac Vehicle</p>
            <p className="text-gray-500 font-medium">Your Choice 3 Tourism</p>
            <p className="text-gray-500 font-medium">Places</p>
            <p className="text-gray-500 font-medium">Tourist Guide</p>
            <p className="text-gray-500 font-medium">Quality Vehicle</p>
          </div>
          <button className="px-5 py-2 rounded-full font-semibold bg-gray-600 text-white hover:bg-[#df3437]">
            GET NOW
          </button>
        </div>
        <div className="shadow-lg text-center border border-gray-700 p-5 rounded-md">
          <AiFillCar className=" text-7xl mx-auto text-gray-500 border border-gray-600 rounded-full p-2"></AiFillCar>
          <h2 className="py-8 text-3xl font-bold text-[#df3437]">Premium</h2>
          <img
            className="mx-auto pb-4"
            src="https://i.ibb.co/z2H2Ydj/header-border.webp"
            alt=""
          />
          <h3 className="text-2xl">
            $2599 <span className="text-sm text-gray-600">/24hour</span>
          </h3>
          <div className="space-y-2 py-4">
            <p className="text-gray-500 font-medium">City trave Prime</p>
            <p className="text-gray-500 font-medium">Ac Vehicle</p>
            <p className="text-gray-500 font-medium">Your Choice 3 Tourism</p>
            <p className="text-gray-500 font-medium">Places</p>
            <p className="text-gray-500 font-medium">Tourist Guide</p>
            <p className="text-gray-500 font-medium">Quality Vehicle</p>
          </div>
          <button className="px-5 py-2 rounded-full font-semibold bg-gray-600 text-white hover:bg-[#df3437]">
            GET NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Packages;
