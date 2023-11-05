const HowItWorks = () => {
  return (
    <div className="pt-10 md:pt-5 px-20">
      <div className="text-center space-y-3 mb-5">
        <h3 className="text-3xl font-bold">How It Works</h3>
        <img className="mx-auto" src="https://i.ibb.co/z2H2Ydj/header-border.webp" alt="" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="text-center">
          <img
            className="mx-auto px-7 py-7 rounded-full border border-gray-400 bg-[#FEFBF0]"
            src="https://i.ibb.co/zR8qNPQ/1.webp"
            alt=""
          />
          <h3 className="py-4 text-2xl font-bold text-[#df3437]">
            Book in Just 2 Tabs
          </h3>
          <p className="text-gray-600 font-semibold ">
            The first tab focuses on selecting the vehicle and providing rental
            details, while the second tab involves confirming the booking and
            making the payment.
          </p>
        </div>
        <div className="text-center">
          <img
            className="mx-auto px-8 py-7 rounded-full border border-gray-400 bg-[#FEFBF0]"
            src="https://i.ibb.co/bKTJZrm/2.webp"
            alt=""
          />
          <h3 className="py-4 text-2xl font-bold text-[#df3437]">
            Get a Driver
          </h3>
          <p className="text-gray-600 font-semibold">
            This process allows you to hire a driver for a specific time or
            duration, providing the necessary information and preferences to
            ensure a smooth and tailored service.
          </p>
        </div>
        <div className="text-center">
          <img
            className="mx-auto px-8 py-7 rounded-full border border-gray-400 bg-[#FEFBF0]"
            src="https://i.ibb.co/R408B7Y/3.webp"
            alt=""
          />
          <h3 className="py-4 text-2xl font-bold text-[#df3437]">
            Track your Driver
          </h3>
          <p className="text-gray-600 font-semibold">
            We offer a feature to track the driver's location in real time to
            provide transparency and convenience for passengers.
          </p>
        </div>
        <div className="text-center">
          <img
            className="mx-auto px-8 py-7 rounded-full border border-gray-400 bg-[#FEFBF0]"
            src="https://i.ibb.co/8mfK4QD/4.webp"
            alt=""
          />
          <h3 className="py-4 text-2xl font-bold text-[#df3437]">
            Arrive safely
          </h3>
          <p className="text-gray-600 font-semibold">
            Safety features and actions are designed to enhance the safety.
            Always use these safety features and verify the information provided
            in the app to ensure a secure journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
