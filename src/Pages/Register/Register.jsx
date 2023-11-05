import { Link} from "react-router-dom";
import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    // console.log(e.currentTarget)
    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, email, password)

    setRegisterError("");

    if (password.length < 6) {
      setRegisterError("Password must be at least 6 characters or longer");
      return;
    } else if (!/([A-Z])([a-z])/.test(password)) {
      setRegisterError("Password must contain at least one uppercase and lowercase letter");
      return;
    }

    //Create User
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        if (result.user) {
          // ??Navigate after login
          // navigate(location?.state ? location.state : "/login");
          toast("You registered successfully");
        } else {
          console.log("please recheck your registration information");
        }
      })
      .catch((error) => {
        console.log(error);
        setRegisterError(error.message);
      });
  };

  const handleGoogleRegister = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        toast("Your registration successfully completed!");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="mx-10 mt-10 mb-10 pb-10 border-2 lg:max-w-2xl rounded-md lg:mx-auto border-[#df3437]">
      <div className="">
        <h2 className="text-3xl my-5 text-center font-semibold">
          Please Register
        </h2>
        <form onSubmit={handleRegister} className="px-20">
          <div className="form-control mb-5">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mb-5">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button
              className="btn bg-[#df3437] hover:bg-border-2 hover:border-[#df3437] hover:text-[#df3437] text-white"
            >
              Register
            </button>
          </div>
        </form>
        {registerError && (
          <p className="text-red-700 text-center my-3">{registerError}</p>
        )}
        <p className="text-center mt-4">
          Already have an account ?{" "}
          <Link to="/login" className="text-teal-800 font-bold">
            Login
          </Link>
        </p>
        <div className="text-center">
          <p className="mt-5 mx-auto">
            <button
              onClick={handleGoogleRegister}
              className="w-40"
            >
              <img src="https://i.ibb.co/d4vzb27/Google-2015-logo-svg.png" alt="" />
            </button>
          </p>
        </div>
      </div>
        <ToastContainer />
    </div>
  );
};

export default Register;
