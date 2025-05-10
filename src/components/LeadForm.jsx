import React, { useContext } from "react";
import img from "../assets/images/contact.webp";
import { useForm } from "react-hook-form";
import { companyDetails } from "../data/constant";
import toast from "react-hot-toast";
import { SpinnerContext } from "./SpinnerContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LeadForm = () => {
  const { setSpinner } = useContext(SpinnerContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  // handle form submit click
  const handleFormSubmit = async (values) => {
    setSpinner(true);
    const emailBody = `
    <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e1e1e1; border-radius: 8px; overflow: hidden;">
      <!-- Header with Logo -->
      <div style="background-color: #4a6baf; padding: 20px; text-align: center;">
        <img src="https://eskaliotech.com/static/media/logo1.9e68347e162ff91ad437.png" alt="Logo" style="max-height: 60px;">
        <h1 style="color: white; margin: 10px 0 0 0;">New Contact Form Submission</h1>
      </div>
    
      <!-- Content -->
      <div style="padding: 25px; background-color: #f9f9f9;">
        <div style="background-color: white; border-radius: 6px; padding: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
          <h2 style="color: #2c3e50; margin-top: 0;">Contact Details</h2>
          
          <div style="margin-bottom: 15px;">
            <p style="margin: 5px 0; color: #555;"><strong style="color: #2c3e50; width: 80px; display: inline-block;">Name:</strong> ${
              values.name
            }</p>
            <p style="margin: 5px 0; color: #555;"><strong style="color: #2c3e50; width: 80px; display: inline-block;">Email:</strong> <a href="mailto:${
              values.email
            }" style="color: #4a6baf; text-decoration: none;">${
      values.email
    }</a></p>
    <p style="margin: 5px 0; color: #555;"><strong style="color: #2c3e50; width: 80px; display: inline-block;">Phone:</strong> <a href="tel:${
      values.phone
    }" style="color: #4a6baf; text-decoration: none;">${values.phone}</a></p>
            <p style="margin: 5px 0; color: #555;"><strong style="color: #2c3e50; width: 80px; display: inline-block;">Subject:</strong> ${
              values.subject
            }</p>
          </div>
    
          <div style="margin: 25px 0;">
            <h3 style="color: #2c3e50; border-bottom: 1px solid #eee; padding-bottom: 8px;">Message</h3>
            <div style="background-color: #f5f7fa; padding: 15px; border-radius: 4px; border-left: 3px solid #4a6baf;">
              <p style="white-space: pre-line; margin: 0; color: #333; line-height: 1.5;">${
                values.message
              }</p>
            </div>
          </div>
    
          <!-- Reply Button -->
          <div style="text-align: center; margin-top: 30px;">
            <a href="mailto:${
              values.email
            }" style="background-color: #4a6baf; color: white; text-decoration: none; padding: 12px 25px; border-radius: 4px; font-weight: bold; display: inline-block; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              Reply to ${values.name.split(" ")[0] || "Sender"}
            </a>
          </div>
        </div>
      </div>
    
      <!-- Footer -->
      <div style="background-color: #2c3e50; color: #bdc3c7; text-align: center; padding: 15px; font-size: 12px;">
        <p style="margin: 5px 0;">© ${new Date().getFullYear()} Eskaliotech. All rights reserved.</p>
        <p style="margin: 5px 0;">
          <a href="mailto:${
            companyDetails.email
          }" style="color: #bdc3c7; text-decoration: none;">Contact Support</a>
        </p>
      </div>
    </div>
  `;

    // Construct the request payload
    var payload = {
      to: companyDetails.email,
      subject: values.subject,
      html: emailBody,
      name: "Eskaliotech Solutions",
    };

    try {
      const res = await axios.post(
        "https://send-mail-redirect-boostmysites.vercel.app/send-email",
        payload
      );

      if (res.data.success) {
        toast.success("Email sent successfully");
        reset();
        navigate("/thank-you");
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      toast.error(err.message);
    } finally {
      setSpinner(false);
    }
  };
  return (
    <div id="contact" className="w-full py-[5rem] relative">
      <div
        data-aos="fade-up"
        className="wrapper grid md:grid-cols-2 items-center gap-10"
      >
        <div className="">
          <h2 className="text-[2rem] md:text-4xl font-semibold mb-3">
            Get in touch with us
          </h2>
          <p className="text-gray-700 text-sm mb-5">
            We are always open to discuss your project, improve your online
            presence
          </p>
          <form
            onSubmit={handleSubmit(handleFormSubmit)}
            className="flex flex-col gap-1"
          >
            <div className="flex flex-col">
              <label htmlFor="" className="text-sm ml-1">
                Name
              </label>
              <input
                type="text"
                className="border outline-none border-secondary rounded-sm p-2"
                placeholder="Full Name"
                {...register("name", {
                  required: "Full name is required",
                  validate: (val) => {
                    if (val.trim() !== "") {
                      return true;
                    } else {
                      return "Full name is required";
                    }
                  },
                })}
              />
              <small className="error-message">{errors.name?.message}</small>
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-sm ml-1">
                Email
              </label>
              <input
                type="email"
                className="border outline-none border-secondary rounded-sm p-2"
                placeholder="Email Address"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Entered email is invalid",
                  },
                })}
              />
              <small className="error-message">{errors.email?.message}</small>
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-sm ml-1">
                Phone
              </label>
              <input
                type="tel"
                className="border outline-none border-secondary rounded-sm p-2"
                placeholder="Phone Number"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[6-9]\d{9}$/i,
                    message: "Entered phone number is invalid",
                  },
                })}
              />
              <small className="error-message">{errors.phone?.message}</small>
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-sm ml-1">
                Subject
              </label>
              <input
                type="text"
                className="border outline-none border-secondary rounded-sm p-2"
                placeholder="Enter Subject"
                {...register("subject", {
                  required: "Subject is required",
                  validate: (val) => {
                    if (val.trim() !== "") {
                      return true;
                    } else {
                      return "Subject is required";
                    }
                  },
                })}
              />
              <small className="error-message">{errors.subject?.message}</small>
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-sm ml-1">
                Message
              </label>
              <textarea
                type="text"
                className="border outline-none border-secondary rounded-sm p-2"
                placeholder="Enter Message"
                rows="4"
                {...register("message", {
                  required: "Message is required",
                  validate: (val) => {
                    if (val.trim() !== "") {
                      return true;
                    } else {
                      return "Message is required";
                    }
                  },
                })}
              />
              <small className="error-message">{errors.message?.message}</small>
            </div>
            <button
              disabled={isSubmitting}
              type="submit"
              className="primary-btn mt-3"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="hidden md:block h-full">
          <img
            loading="lazy"
            src={img}
            width="600"
            height="600"
            alt="contact-us"
            className="h-full rounded-lg object-cover object-right w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default LeadForm;
