import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo1.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { companyDetails, servicesList } from "../data/constant";
import emailIcon from "../assets/images/icons/email.png";
import phoneIcon from "../assets/images/icons/phone.png";
import locationIcon from "../assets/images/icons/location.png";
import bg from "../assets/images/footer-bg.jpg";

const Thankyou = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="fixed py-3 top-0 z-50 w-full bg-white/50 backdrop-blur-sm text-primary">
        <div className="flex wrapper items-center gap-8 justify-between">
          <Link
            to="/"
            className="cursor-pointer"
            spy={true}
            smooth={true}
            duration={500}
          >
            <img
              loading="lazy"
              src={logo}
              alt="logo"
              width="100"
              height="100"
              className="h-[4.5rem] md:h-[5rem] object-contain"
            />
          </Link>
        </div>
      </div>
      <div className="min-h-[80vh] flex items-center pb-[3rem]">
        <div className="wrapper flex flex-col items-center gap-5">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
            Thank You
          </h1>
          <p className="text-lg text-center">We will get back to you soon!</p>
          <Link to="/" className="primary-btn">
            Go Back to Home
          </Link>
        </div>
      </div>
      <div
        className="border-t-2 py-[2rem] bg-cover bg-top"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="wrapper grid grid-cols-1 md:grid-cols-4 lg:grid-cols-[50%_20%_30%] gap-6">
          <div className="w-fit md:col-span-4 lg:col-span-1 md:place-self-center lg:place-self-auto">
            <img src={logo} alt="logo" className="w-[10rem] object-contain" />
          </div>
          <div className="md:col-span-2 lg:col-span-1 flex flex-col gap-4">
            <h6 className="text-lg font-medium">Our Services</h6>
            <div className="flex text-md">
              <ul className="flex flex-col gap-2">
                {servicesList.map(({ title }) => (
                  <Link to={`/services/${title}`} key={title}>
                    {title}
                  </Link>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:col-span-2 lg:col-span-1 flex flex-col gap-4">
            <h6 className="text-lg font-medium">Contact Info</h6>
            <div className="flex flex-col gap-5">
              <ul className="flex flex-col gap-6 text-md">
                <li className="flex gap-2 items-center">
                  <img
                    loading="lazy"
                    src={emailIcon}
                    alt="email"
                    className="w-[1.5rem] object-contain grayscale"
                  />
                  <a href={`mailto:${companyDetails.email}`}>
                    <span className="font-medium">Email:</span>{" "}
                    {companyDetails.email}
                  </a>
                </li>
                <li className="flex gap-2 items-center">
                  <img
                    loading="lazy"
                    src={phoneIcon}
                    alt="phone"
                    className="w-[1.5rem] object-contain grayscale"
                  />
                  <a href={`tel:${companyDetails.phone}`}>
                    <span className="font-medium">Phone:</span>{" "}
                    {companyDetails.phone}
                  </a>
                </li>
                <li className="flex gap-2 items-start">
                  <img
                    loading="lazy"
                    src={locationIcon}
                    alt="location"
                    className="w-[1.5rem] object-contain grayscale"
                  />
                  <div className="max-w-[15rem] capitalize text-wrap space-y-2">
                    <span className="font-medium">Office Locations:</span>
                    <ul className="list-disc space-y-2">
                      <li>{companyDetails.location1}</li>
                      <li>{companyDetails.location2}</li>
                    </ul>
                  </div>
                </li>
              </ul>
              <div className="flex items-center gap-4">
                <Link className="bg-primary/10 text-primary/70 w-[2.5rem] h-[2.5rem] rounded-full flex justify-center items-center text-2xl hover:bg-gradient-to-r hover:text-primary hover:-translate-y-1 transition-all duration-300">
                  <FaFacebookF />
                </Link>
                <Link className="bg-primary/10 text-primary/70 w-[2.5rem] h-[2.5rem] rounded-full flex justify-center items-center text-2xl hover:bg-gradient-to-r hover:text-primary hover:-translate-y-1 transition-all duration-300">
                  <FaInstagram />
                </Link>
                <Link className="bg-primary/10 text-primary/70 w-[2.5rem] h-[2.5rem] rounded-full flex justify-center items-center text-2xl hover:bg-gradient-to-r hover:text-primary hover:-translate-y-1 transition-all duration-300">
                  <FaLinkedin />
                </Link>
                <Link className="bg-primary/10 text-primary/70 w-[2.5rem] h-[2.5rem] rounded-full flex justify-center items-center text-2xl hover:bg-gradient-to-r hover:text-primary hover:-translate-y-1 transition-all duration-300">
                  <FaTwitter />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thankyou;
