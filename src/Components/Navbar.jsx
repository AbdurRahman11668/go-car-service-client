import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut().then().catch();
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className="hover:bg-[#df3437] text-[16px] font-semibold hover:text-white text-[#df3437]"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className="hover:bg-[#df3437] text-[16px] font-semibold hover:text-white"
        >
          Services
        </NavLink>
      </li>
      {user && (
        <>
          {/* <li>
        <NavLink
          to="/cart"
          className="hover:bg-[#df3437] text-[16px] hover:text-white"
        >
          Dashboard
        </NavLink>
      </li> */}
          <li className="dropdown dropdown-hover">
            <label
              tabIndex={0}
              className="hover:bg-[#df3437] text-[16px] font-semibold hover:text-white text-[#df3437]"
            >
              Dashboard
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu rounded-box w-32 md:w-40 bg-white text-[16px]"
            >
              <li>
                <NavLink
                  to="/myservices"
                  className="hover:bg-[#df3437] text-sm font-semibold hover:text-white"
                >
                  My-Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/addservices"
                  className="hover:bg-[#df3437] text-sm font-semibold hover:text-white"
                >
                  Add-Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/myschedules"
                  className="hover:bg-[#df3437] text-sm font-semibold hover:text-white"
                >
                  My-Schedules
                </NavLink>
              </li>
              
            </ul>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar md:max-w-3xl uppercase lg:max-w-7xl md:mx-auto flex-col-reverse md:flex-row">
      <div className="md:navbar-start justify-center md:justify-start">
        <NavLink
          to="/"
          className=" text-end hover:text-[#cf1c1f] text-[#df3437]"
        >
          <div className="flex items-center space-x-2">
            <img
              className="w-10"
              src="https://i.ibb.co/SXqMf6g/logo-removebg-preview.png"
              alt=""
            />
            <h3 className="text-4xl font-bold">GoCar</h3>
          </div>
          <p className="text-sm font-medium">Service</p>
        </NavLink>
        <div className="dropdown md:ml-10">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box"
          >
            {navLinks}
          </ul>
        </div>
      </div>
      <div className="md:navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[#df3437] font-medium ">
          {navLinks}
        </ul>
      </div>
      
    </div>
  );
};

export default Navbar;
