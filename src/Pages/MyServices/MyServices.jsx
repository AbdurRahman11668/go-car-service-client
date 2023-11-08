import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import MyService from "./MyService";
import { NavLink } from "react-router-dom";

const MyServices = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);

  const url = `https://go-car-service-server.vercel.app/products?email=${user?.email}`;
  useEffect(() => {
    axios.get(url, { withCredentials: true }).then((res) => {
      setProducts(res.data);
    });
  }, [url]);

  const handleDelete = (id) => {
    const proceed = confirm("Are You sure you want to delete");
    if (proceed) {
      fetch(`https://go-car-service-server.vercel.app/products/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successful");
            const remaining = products.filter((booking) => booking._id !== id);
            setProducts(remaining);
          }
        });
    }
  };

  

  return (
    <motion.div
      className="my-10 px-5 lg:px-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-center space-y-3 mb-5">
        <h3 className="text-3xl font-bold"><NavLink to="/" className='text-[#df3437]'>GoCar</NavLink> | My Services</h3>
        <img
          className="mx-auto"
          src="https://i.ibb.co/z2H2Ydj/header-border.webp"
          alt=""
        />
      </div>
      <div className="grid md:grid-cols-2 gap-5 md:gap-10">
        {products.map((product) => (
          <MyService
            key={product._id}
            product={product}
            handleDelete={handleDelete}
          ></MyService>
        ))}
      </div>
    </motion.div>
  );
};

export default MyServices;
