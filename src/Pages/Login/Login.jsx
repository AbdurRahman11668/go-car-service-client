import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";

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
        const loggedInUser = result.user;
                console.log(loggedInUser);
                const user = { email };

                // get access token
                axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                        if (res.data.success) {
                            navigate(location?.state ? location?.state : '/')
                        }
                    })

            })
            .catch(error => console.log(error));
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
    <div className="mx-10 mt-10 px-10 md:px-0 border-2 lg:max-w-2xl rounded-md lg:mx-auto border-[#df3437] mb-10">
      <div className=" mb-10">
        <h2 className="text-3xl my-5 text-center font-semibold">
        <NavLink to="/" className='text-[#df3437]'>GoCar</NavLink> | Please Login
        </h2>
        <form onSubmit={handleLogin} className="px-20">
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
              className="btn bg-[#df3437] hover:bg-border-2 hover:border-[#df3437] hover:text-[#df3437] text-white"
            >
              Login
            </button>
          </div>
        </form>
            {LoginError && <p className="text-[#df3437] text-center my-3">{LoginError}</p>}
            {success && <p className="text-[#df3437] text-center my-3">{success}</p>}
        <p className="text-center mt-4">
          Do not have an account ?{"  "}
          <Link to="/register" className="text-[#df3437] font-bold">
            Register
          </Link>
        </p>
        <div className="text-center">
          <p className="mt-5 mx-auto">
            <button
              onClick={handleGoogleSignIn}
              className="w-40"
            >
              <img src="https://i.ibb.co/d4vzb27/Google-2015-logo-svg.png" alt="" />
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
