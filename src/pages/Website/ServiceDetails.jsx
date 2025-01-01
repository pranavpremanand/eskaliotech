import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { servicesList } from "../../data/constant";

const ServiceDetails = () => {
  const { serviceName } = useParams();
  const service = servicesList.find((item) => item.title === serviceName);
  const currentIndex = servicesList.findIndex(
    (item) => item.title === serviceName
  );

  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < servicesList.length - 1;

  if (hasPrev) {
    service.prev = servicesList[currentIndex - 1];
  }

  if (hasNext) {
    service.next = servicesList[currentIndex + 1];
  }

  if (!service) {
    return <Navigate to="/services" />;
  }

  return (
    <div className="flex flex-col gap-10">
      <img
        loading="lazy"
        data-aos="fade-up"
        src={service.img1}
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt={service.title}
      />
      <div className="flex flex-col gap-4">
        <h2 data-aos="fade-up" className="heading">
          {service.title}
        </h2>
        <p data-aos="fade-up" className="description">
          {service.intro.description}
        </p>
        <h2 data-aos="fade-up" className="text-2xl font-semibold mt-5">
          {service.approach.title}
        </h2>
        <p data-aos="fade-up" className="description">
          {service.approach.description}
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-7">
        <div className="h-full w-full">
          <img
            loading="lazy"
            src={service.img2}
            className="h-full w-full object-cover rounded-md"
            alt={service.title}
          />
        </div>
        <div className="flex flex-col gap-4">
          {service.services.map((item) => (
            <div key={item.title} className="flex flex-col gap-2">
              <div className="flex gap-3 items-center">
                <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                  ✓
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <p>{service.conclusion.description}</p>
      <hr />
      <div
        className={`flex w-full ${
          service.prev ? "justify-between" : "justify-end"
        } gap-6`}
      >
        {service.prev && (
          <Link
            to={`/services/${service.prev.title}`}
            className="flex items-center gap-3"
          >
            <img
              loading="lazy"
              src={service.prev.icon}
              alt=""
              className="w-[3rem] h-[3rem] hidden sm:inline-block object-contain grayscale"
            />
            <div className="flex flex-col gap-1">
              <h6 className="text-md font-semibold">
                {service.prev.title}
              </h6>
              <p className="flex items-center gap-2 text-sm text-secondary">
                <IoIosArrowRoundBack className="text-2xl" /> Previous
              </p>
            </div>
          </Link>
        )}
        {service.next && (
          <Link
            to={`/services/${service.next.title}`}
            className="flex items-center gap-3"
          >
            <img
              loading="lazy"
              src={service.next.icon}
              alt=""
              className="w-[3rem] h-[3rem] hidden sm:inline-block object-contain grayscale"
            />
            <div className="flex flex-col gap-1">
              <h6 className="text-md font-semibold">
                {service.next.title}
              </h6>
              <p className="flex items-center gap-2 text-sm text-secondary">
                Next <IoIosArrowRoundForward className="text-2xl" />
              </p>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ServiceDetails;
