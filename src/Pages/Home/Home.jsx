import Banner from "../../Components/Banner";
import { motion } from "framer-motion";
import HowItWorks from "../../Components/HowItWorks";
import Trust from "../../Components/Trust";
import Packages from "../../Components/Packages";
import PopularServices from "./Cards/PopularServices";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>GoCar - Home</title>
        <link rel="" href="" />
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Banner></Banner>
        <PopularServices></PopularServices>
        <HowItWorks></HowItWorks>
        <Trust></Trust>
        <Packages></Packages>
      </motion.div>
    </div>
  );
};

export default Home;
