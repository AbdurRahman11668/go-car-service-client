import { Link, NavLink } from "react-router-dom";
import { FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="md:flex md:justify-between px-10 items-center p-4 bg-red-600 text-white">
        <div className="md:flex space-x-5 items-center text-center md:text-start pb-5 md:pb-0">
          <aside className="items-center grid-flow-col pb-3 md:pb-0">
            <NavLink to="/" className=" text-end">
              <h3 className="text-4xl font-bold">Fitness</h3>
              <p className="text-sm">Club Center</p>
            </NavLink>
          </aside>
          <p className="text-md font-semibold">
            Copyright © 2023 - All right reserved
          </p>
        </div>
        <nav className="flex justify-center gap-4 md:place-self-center md:justify-self-end">
          <Link to="https://www.twitter.com/" className="text-2xl">
            <FaTwitter></FaTwitter>
          </Link>
          <Link to="https://www.youtube.com/" className="text-2xl">
            <FaYoutube></FaYoutube>
          </Link>
          <Link to="https://www.facebook.com/" className="text-2xl">
            <FaFacebook></FaFacebook>
          </Link>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
