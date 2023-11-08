
const MySchedule = ({service}) => {
    const {_id, image2, service_name2, date2, instruction2, price2} = service;
    return (
        <div>
            <div className="" key={_id}>
              <div className="text-center md:text-start space-x-5 bg-gray-100  items-center shadow-lg">
                <div className="">
                  <img
                    src={image2}
                    className="w-[500px] md:w-[400px] rounded mx-auto"
                    alt=""
                  />
                </div>
                <div className="space-y-1 py-3 text-center">
                    <h3 className="text-red-600 font-bold text-2xl">
                      {service_name2}
                    </h3>
                  <p className="text-sm text-gray-700 font-semibold">
                    Booked Date: {date2}
                  </p>
                  <p className="text-md pb-3 text-gray-500 font-semibold">
                    Price:{" "}
                    <span className="text-red-600 font-semibold">
                      {price2}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            
        </div>
    );
};

export default MySchedule;