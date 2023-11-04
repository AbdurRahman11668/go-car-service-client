import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center w-full">
            <img className="w-[700px] mx-auto " src="https://i.ibb.co/7j8Lm4j/404.gif" alt="" />
            <Link to="/" className="btn text-2xl font-bold">Go Back to Home</Link>
        </div>
    );
};

export default ErrorPage;