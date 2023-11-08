import { NavLink, useLoaderData } from "react-router-dom";
import MySchedule from "./MySchedule";
import { Helmet } from "react-helmet";

const MySchedules = () => {
  const loadService = useLoaderData();
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>GoCar - My Schedules</title>
        <link rel="" href="" />
      </Helmet>
    <div className="px-5 lg:px-20 my-10">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">
        My Schedules
      </h2>
      <div>
        <div className="grid md:grid-cols-2 gap-5 md:gap-10">
          {loadService.map((service) => (
            <MySchedule key={service._id} service={service}></MySchedule>
          ))}
        </div>
      </div>

      <div>
        <div className="mt-10 text-center">
          <h2 className="text-3xl font-bold text-[#df3437]">Pending</h2>
          <h2 className="text-gray-600 text-xl">
            There are no Pending, You need to book our service.
          </h2>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MySchedules;
