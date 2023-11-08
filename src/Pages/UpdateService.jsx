import { Helmet } from "react-helmet";
import { NavLink, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateService = () => {
  const services = useLoaderData();
  const { _id, service_name, image, area, description, price } = services;

  const handleUpdateService = (event) => {
    event.preventDefault();

    const form = event.target;
    const service_name = form.name.value;
    const image = form.image.value;
    const area = form.area.value;
    const description = form.description.value;
    const price = form.price.value;

    const updatedService = {
      service_name,
      image,
      area,
      description,
      price,
    };
    fetch(`https://go-car-service-server.vercel.app/products/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedService),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Products Updated Successfully!",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>GoCar - Update Services</title>
        <link rel="" href="" />
      </Helmet>
      <div className="bg-[#f4f4f0] px-24 py-10 ">
        <div className="w-2/3 mx-auto">
          <h3 className="text-3xl md:text-4xl text-center mb-5 font-bold">
            <NavLink to="/" className="text-[#df3437]">
              GoCar
            </NavLink>{" "}
            | Services
          </h3>
          <form className="" onSubmit={handleUpdateService}>
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
                    defaultValue={service_name}
                    placeholder="Service Name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 md:ml-4">
                <label className="label">
                  <span className="label-text font-bold">
                    Service Image URL
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="image"
                    defaultValue={image}
                    placeholder="Service Image URL"
                    className="input input-bordered w-full"
                  />
                </label>
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
                      defaultValue={price}
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
                      defaultValue={area}
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
                    defaultValue={description}
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
    </div>
  );
};

export default UpdateService;
