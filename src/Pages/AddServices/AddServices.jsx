import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const AddServices = () => {
  const { user } = useContext(AuthContext);

  const handleAddProduct = (event) => {
    event.preventDefault();
    
    const form = event.target;
    const service_name = form.name.value;
    const image = form.image.value;
    const provider_email = user.providerData[0].email;
    const provider_name = user.providerData[0].displayName;
    const price = form.price.value;
    const area = form.area.value;
    const description = form.description.value;

    const newService = {
        service_name,
        image,
        provider_email,
        provider_name,
        price,
        area,
        description
    }
    // console.log(newService)
    fetch("https://go-car-service-server.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newService),
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
    <div className="bg-[#f4f4f0] px-24 py-10 ">
      <div className="md:w-2/3 mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-10">
          Add Product
        </h2>
        <form className="" onSubmit={handleAddProduct}>
          {/* Form name & brand name row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2 mb-5 md:mb-0">
              <label className="label">
                <span className="label-text font-bold">Service Name</span>
              </label>
              <label className="input-group">
                <input
                  type="Text"
                  name="name"
                  placeholder="Service Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text font-bold">Service Image URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="image"
                  placeholder="Service Image URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="md:flex mb-8 ">
            <div className="form-control md:w-1/2 mb-5 md:mb-0">
              <label className="label">
                <span className="label-text font-bold">Your Name</span>
              </label>
              <p className="text-lg font-semibold pl-5 text-gray-600">{user.providerData[0].displayName}</p>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Your Email</span>
              </label>
              <p className="text-lg font-semibold pl-5 text-gray-600">{user.providerData[0].email}</p>
            </div>
          </div>
          
          <div className="md:flex mb-8 lg:space-x-4">
            <div className="form-control md:w-1/2">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">Price</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="price"
                    placeholder="Price"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            <div className="form-control md:w-1/2">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">Service Area</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="area"
                    placeholder="Service Area"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
          </div>

          {/* form image url row */}
          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* Submit Button */}
          <input
            type="submit"
            value="Add New Product"
            className="btn btn-block hover:text-red-600 text-white bg-red-600 font-semibold"
          />
        </form>
      </div>
    </div>
  );
};

export default AddServices;
