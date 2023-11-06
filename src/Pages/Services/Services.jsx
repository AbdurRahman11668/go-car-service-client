import { useState } from "react";
import useServices from "../../hooks/useServices";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = useServices();

  const [serviceFilter, setServiceFilter] = useState("");

  const handleSearchClick = () => {
    setServiceFilter(document.getElementById("searchBar").value);
  };
  function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
  const filteredCards = serviceFilter
    ? services.filter(
        (service) => service.service_name === capitalize(serviceFilter)
      )
    : services;

  return (
    <div className="px-20 mb-10">
      <div className="flex justify-center py-10">
        <input
          id="searchBar"
          className="rounded-l bg-white border px-3 py-2"
          type="text"
          placeholder="Search here...."
        />
        <button
          onClick={handleSearchClick}
          className="rounded-r bg-[#df3437] text-white hover:bg-transparent hover:text-[#df3437] hover:border hover:border-[#df3437] text-lg px-5 font-medium"
        >
          Search
        </button>
      </div>
      <div className="mt-4">
        <div className="text-center">
          <h3 className="text-4xl font-bold text-[#df3437]">Services</h3>
          <img
            className="mx-auto mt-4"
            src="https://i.ibb.co/z2H2Ydj/header-border.webp"
            alt=""
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCards.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
