import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";

const MyServices = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);

  const url = `https://go-car-service-server.vercel.app/products?email=${user?.email}`;
  useEffect(() => {
    axios.get(url, { withCredentials: true }).then((res) => {
      setProducts(res.data);
    });
  }, [url]);
  return (
    <div className="my-10">
      <h2>My Service</h2>
      <h2 className="text-5xl">Your bookings: {products.length}</h2>
    </div>
  );
};

export default MyServices;
