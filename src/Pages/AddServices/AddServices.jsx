import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const AddServices = () => {
  const { user } = useContext(AuthContext);

  const handleAddProduct = (event) => {
    event.preventDefault();
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
          
        </form>
      </div>
    </div>
  );
};

export default AddServices;
