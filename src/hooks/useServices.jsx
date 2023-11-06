import { useEffect, useState } from "react";


const useServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://go-car-service-server.vercel.app/products')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return services;
};

export default useServices;