import React, { useEffect } from "react";
import testiImg from "../assets/images/testimonials/testimonials-bg.png";
import line from "../assets/images/line.png";
import users from "../assets/images/users-grp.png";
import { testimonials } from "../constant";
import gsap from "gsap";

const Testimonials = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(".testimonial-item", {
      opacity: 1,
      duration: 1,
      stagger: 3.5,
      delay: 0.2,
      repeat: -1,
      yoyo: true,
    });

    return () => {
      tl.kill();
    };
  }, []);
  return (
    <div
      id="reviews"
      className="min-h-[70vh] py-[5rem] w-full bg-cover bg-no-repeat bg-bottom flex items-center z-10"
      style={{ backgroundImage: `url(${testiImg})` }}
    >
      <div className="wrapper grid lg:grid-cols-2 gap-10 w-full">
        <div
          data-aos="fade-right"
          className="flex flex-col items-center lg:items-start w-full"
        >
          <div className="flex items-center gap-3 mb-5">
            <img src={line} alt="line" className="w-[3rem]" />
            <h6 className="font-medium text-secondary">Testimonials</h6>
          </div>
          <h2 className="text-[2rem] md:text-4xl capitalize font-semibold mb-5 text-center lg:text-start lg:max-w-[30rem]">
            Clients Feedback Examples You
          </h2>
          <p className="text-gray-600 text-sm mb-5 max-w-[30rem] text-center lg:text-start">
            At Synzentech Solutions, we take pride in the success of our clients. Here's what
            some of them have to say about their experience working with us:
          </p>
          <img
            width="150"
            height="50"
            src={users}
            alt="users"
            className="w-[8rem] object-contain"
          />
        </div>
        <div
          data-aos="fade-left"
          className="relative min-h-[20rem] sm:min-h-[17rem] w-full sm:w-4/5 lg:w-full mx-auto mt-[4rem] sm:mt-0"
        >
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="testimonial-item bg-white opacity-0 absolute inset-0 w-full h-full flex flex-col justify-center p-5 rounded-md border-2 border-black/60 shadow-2xl"
            >
              <img
                width="75"
                height="75"
                loading="lazy"
                src={item.img}
                className="w-[7rem] h-[7rem] object-contain rounded-full absolute top-[-3.5rem] left-1/2 -translate-x-1/2 sm:-translate-x-0 sm:left-[-3.5rem] sm:top-1/2 sm:-translate-y-1/2"
                alt=""
              />
              <div className="sm:pl-[5rem] sm:pr-[3rem] pt-[3rem] sm:pt-0 flex flex-col gap-3">
                <p className="text-sm text-wrap">{item.review}</p>
                <h5 className="text-[1.25rem] sm:text-3xl text-center sm:text-start">
                  - {item.name}
                </h5>
                <p className="text-sm text-center sm:text-start">
                  {item.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
