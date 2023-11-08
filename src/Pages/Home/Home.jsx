import Banner from "../../Components/Banner";
import { motion } from "framer-motion";
import HowItWorks from "../../Components/HowItWorks";
import Trust from "../../Components/Trust";
import Packages from "../../Components/Packages";
import PopularServices from "./Cards/PopularServices";

const Home = () => {
  return (
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
  );
};

export default Home;
