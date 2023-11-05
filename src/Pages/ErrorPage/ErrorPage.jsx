import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const ErrorPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="text-center w-full mb-10">
        <img
          className="w-[700px] mx-auto "
          src="https://i.ibb.co/7j8Lm4j/404.gif"
          alt=""
        />
        <Link to="/" className="btn text-2xl font-bold">
          Go Back to Home
        </Link>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
