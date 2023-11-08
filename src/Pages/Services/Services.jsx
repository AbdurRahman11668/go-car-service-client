import { motion } from "framer-motion";
import { useState } from "react";
import useServices from "../../hooks/useServices";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = useServices();

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  const filteredData = services.filter((service) =>
    service.service_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div className="px-5 lg:px-20 mb-10" initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}>
      <div className="flex justify-center py-5 mt-5">
        <input
          type="text"
          placeholder="Search here...."
          value={searchQuery}
          onChange={handleSearch}
          className="input input-bordered input-error w-full max-w-xs font-medium text-lg"
        />
      </div>
      <div className="mt-5">
        <div className="text-center">
          <h3 className="text-4xl font-bold text-[#df3437]">Services</h3>
          <img
            className="mx-auto mt-4"
            src="https://i.ibb.co/z2H2Ydj/header-border.webp"
            alt=""
          />
        </div>
        <div className="space-y-5">
          {filteredData.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
