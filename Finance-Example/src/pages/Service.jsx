import React from "react";
import Hero from "../components/Hero";
import ServiceItem from "../components/ServiceItem";
import { useSelector,useDispatc } from "react-redux";
import

export default function Service() {
  // Redux store'dan services verisini alıyoruz
  const services = useSelector((state) => state.service.services);
  const services= useDispatch();

  return (
    <div>
      <Hero title="Service" />
      <div className="service pt-100 pb-70">
        <div className="container">
          <div className="row">
            {services.map((item) => (
              <ServiceItem service={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
