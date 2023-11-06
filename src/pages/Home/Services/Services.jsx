import { useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
    const [services, setServices] = useState([]);
    useState(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className="text-center py-3 text-bold">
                <h3 className="text-2xl text-red-600"> Services</h3>
                <h3 className="text-3xl text-red-800 font-bold"> Our Services area</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos qui <br /> reprehenderit facilis ipsum, aliquam error?</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {
                    services.map(service => <ServicesCard
                        key={service._id} service={service}
                    >
                    </ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;