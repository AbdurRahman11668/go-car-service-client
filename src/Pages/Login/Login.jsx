import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const [LoginError, setLoginError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    setSuccess("");

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        if (result.user) {
          toast("User Logged in Successfuly");
          // ??Navigate after login
          navigate(location?.state ? location.state : "/");
        } else {
          toast("please check email address.");
        }
      })
      .catch((error) => {
        console.log(error);
          setLoginError("Invalid email or password. Please try again. If You are new, the click the register!");
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        // ??Navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        setLoginError(error.message);
      });
  };

  return (
    <div className="px-10 md:px-0">
      <div className=" mb-10">
        <h2 className="text-3xl my-5 text-center font-semibold">
          Please Login
        </h2>
        <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/3 mx-auto">
          <div className="form-control mb-2">
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
              className="btn bg-teal-600 text-white"
            >
              Login
            </button>
          </div>
        </form>
            {LoginError && <p className="text-red-700 text-center my-3">{LoginError}</p>}
            {success && <p className="text-green-700 text-center my-3">{success}</p>}
        <p className="text-center mt-4">
          Do not have an account ?{"  "}
          <Link to="/register" className="text-red-600 font-bold">
            Register
          </Link>
        </p>
        <div className=" md:w-3/4 lg:w-1/3 mx-auto ">
          <p className="mt-5 mx-auto">
            <button
              onClick={handleGoogleSignIn}
              className="btn rounded-3xl w-full bg-blue-500 text-white text-xl"
            >
              <FaGoogle className="mr-2 text-blue-500 p-1 bg-white rounded-3xl text-3xl"></FaGoogle>{" "}
              Google
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
