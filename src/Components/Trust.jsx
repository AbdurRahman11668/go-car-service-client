import { IoIosCheckmarkCircle } from "react-icons/io";
const Trust = () => {
  return (
    <div className="my-10 flex flex-col-reverse lg:flex-row lg:px-20 bg-[#FEFBF0] py-10">
      <div className="lg:w-1/2 px-10">
        <h3 className="mb-3 text-4xl font-bold">
          Trusted Cab Services in the World
        </h3>
        <img src="https://i.ibb.co/z2H2Ydj/header-border.webp" alt="" />
        <p className="text-gray-600 py-5 ">
          Curabitur placerat cursus nisi nec pharetra. Proin quis tortor
          fringilla, placerat nisi nec, auctor ex. Donec commodo orci ac lectus
          mattis, sed interdum sem scelerisque.
        </p>
        <div className="px-5">
          <h3 className="flex items-center">
            <IoIosCheckmarkCircle className="mr-2"></IoIosCheckmarkCircle>Cras
            justo odio
          </h3>
          <h3 className="flex items-center">
            <IoIosCheckmarkCircle className="mr-2"></IoIosCheckmarkCircle>
            Dapibus ac facilisis in
          </h3>
          <h3 className="flex items-center">
            <IoIosCheckmarkCircle className="mr-2"></IoIosCheckmarkCircle>Morbi
            leo risus
          </h3>
        </div>
        <button className="mt-7 px-5 py-2 bg-gray-700 hover:bg-[#df3437] text-white rounded-3xl">Read More</button>
      </div>
      <div className="lg:w-1/2 flex items-center pt-10 lg:pt-0">
        <img
          className="w-2/3 mx-auto"
          src="https://i.ibb.co/mz49XQn/trust.webp"
          alt=""
        />
      </div>
    </div>
  );
};

export default Trust;
