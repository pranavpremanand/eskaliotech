import React from "react";
import { PiCaretDoubleRightBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const ServiceItemCard = ({ item }) => {
  return (
    <Link
      to={`/services/${item.title}`}
      className="h-full flex flex-col justify-between gap-5 bg-secondary/15 hover:shadow-2xl transition-all duration-300 hover:bg-secondary/10 group rounded-lg border border-black p-5"
    >
      <div className="flex flex-col gap-2 items-start">
        <div className="group-hover:scale-[120%] transition-all duration-300 w-[4rem] h-[4rem] p-3 rounded-full bg-secondary/10 flex items-center justify-center">
          <img
            width="75"
            height="75"
            loading="lazy"
            src={item.icon}
            alt="icon"
            className="group-hover:scale-[120%] transition-all duration-300 w-[3rem] grayscale"
          />
        </div>
        <h6 className="font-medium text-lg">
          {item.title}
        </h6>
        <p className="text-gray-700 text-md">
          {item.shortDescription}
        </p>
      </div>
      <Link
        to={`/services/${item.title}`}
        className="text-secondary transition-all duration-300 underline text-md flex gap-5 items-center"
      >
        Know More <PiCaretDoubleRightBold />
      </Link>
    </Link>
  );
};

export default ServiceItemCard;
