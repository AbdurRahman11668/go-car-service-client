import { useContext, useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const ServiceDetails = () => {
  const products = useLoaderData();
  const { user } = useContext(AuthContext);

  const [date, setDate] = useState("");
  const dateInputRef = useRef(null);

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  const handleAddProduct = (e) => {
    e.preventDefault();

    const service_name2 = products.service_name;
    const image2 = products.image;
    const price2 = products.price;
    const provider_email2 = products.provider_email;
    const user_email2 = user.email;
    const date2 = date;
    //   console.log(date2)
    const instruction2 = e.target.instruction.value;
    console.log(instruction2);

    const newProducts = {
      service_name2,
      image2,
      price2,
      provider_email2,
      user_email2,
      date2,
      instruction2,
    };
    fetch("https://go-car-service-server.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProducts),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Product Added Successfully!",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="mt-5 mb-10 px-5 lg:px-20">
      <div className="space-y-2 w-1/2 mx-auto mb-10 text-center">
        <h5 className="text-[#df3437] text-xl font-semibold">
          {products.provider_name}
        </h5>
        <h5 className="text-gray-700 font-semibold">
          Loction: {products.provider_location}
        </h5>
        <p className="text-gray-500 font-medium ">
          {products.provider_description.slice(0, 150)} ...
        </p>
        <img
          className="mx-auto"
          src="https://i.ibb.co/z2H2Ydj/header-border.webp"
          alt=""
        />
      </div>
      <div className="mx-auto">
        <img className="w-3/5 lg:w-3/5 mx-auto" src={products.image} alt="" />
        <div className="lg:w-4/5 mx-auto space-y-3">
          <h3 className="text-[#df3437] text-2xl font-bold">
            {products.service_name}
          </h3>
          <p className="text-gray-500 font-medium">{products.description}</p>
          <div className="flex items-center space-x-5">
            <img
              className="w-10 rounded-full"
              src={products.provider_image}
              alt=""
            />
            <h5 className="font-medium text-lg text-[#df3437]">
              {products.provider_name}
            </h5>
          </div>
          <p className="font-semibold text-[#df3437] text-lg">
            Price: {products.price}
          </p>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="px-8 py-2 bg-[#df3437] hover:bg-transparent hover:border-2 border-2 border-[#df3437] text-lg font-medium text-white hover:text-[#df3437] mt-5 rounded"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Book Now
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <form
              onSubmit={handleAddProduct}
              className="modal-box w-full text-center space-y-2 z-0"
            >
              <img src={products.image} className="w-96 mx-auto" alt="" />
              <p className="font-medium text-[#df3437]">
                Service name: {products.service_name}
              </p>
              <p className="font-medium text-gray-700 text-sm">
                Provider E-mail: {products.provider_email}
              </p>
              <p className="font-medium text-gray-700 text-sm">
                User E-mail: {user.email}
              </p>
              <input
                className="block mx-auto px-[34px]"
                type="date"
                onChange={handleChange}
                ref={dateInputRef}
              />
              <input type="text" name="instruction" placeholder="Instruction" />
              <p className="font-medium text-[#df3437] text-sm">
                Price: {products.price}
              </p>
              <div className="modal-action">
                <div className="modal-action w-full" method="dialog">
                  <button className="mx-auto px-8 py-2 bg-[#df3437] hover:bg-transparent hover:border-2 border-2 border-[#df3437] text-lg font-medium text-white hover:text-[#df3437] mt-5 rounded">
                    Purchase
                  </button>
                </div>
              </div>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Go Back</button>
                </form>
              </div>
            </form>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
