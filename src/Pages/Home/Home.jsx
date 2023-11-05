import Banner from "../../Components/Banner";
import { motion } from "framer-motion";
import Info from "../../Components/Info";
import HowItWorks from "../../Components/HowItWorks";
import Trust from "../../Components/Trust";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <Trust></Trust>
    </motion.div>
  );
};

export default Home;
