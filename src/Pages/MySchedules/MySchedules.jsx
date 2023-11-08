
import { NavLink, useLoaderData } from "react-router-dom";
import MySchedule from "./MySchedule";

const MySchedules = () => {
    const loadService = useLoaderData();
  return (
    <div className="px-5 lg:px-20 my-10">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">
          <NavLink to="/" className='text-[#df3437]'>GoCar</NavLink> | My Schedules
        </h2>
      <div>
        <div className="grid md:grid-cols-2 gap-5 md:gap-10">
          {loadService.map((service) => (
            <MySchedule key={service._id} service={service}></MySchedule>
            
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default MySchedules;
