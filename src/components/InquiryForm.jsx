import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { SpinnerContext } from "../components/SpinnerContext";
import { companyDetails } from "../data/constant";
import line from "../assets/images/line.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const InquiryForm = () => {
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

    // var emailBody = "Name: " + values.name + "\n\n";
    // emailBody += "Email: " + values.email + "\n\n";
    // emailBody += "Phone: " + values.phone + "\n\n";
    // emailBody += "Message:\n" + values.message;
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
    <div className="wrapper">
      <div
        data-aos="fade-up"
        className="max-w-6xl mx-auto bg-white p-5 sm:p-8 shadow-large shadow-black/10 rounded-lg relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-5">
          <div className="flex flex-col gap-3">
            <div data-aos="fade-up" className="flex items-center gap-3">
              <img src={line} alt="line" className="w-[3rem]" />
              <h6 className="font-medium text-secondary">
                Book an Appointment
              </h6>
            </div>
            <h2 data-aos="fade-up" className="heading-2 capitalize">
              Let’s Collaborate to Innovate
            </h2>
            <p data-aos="fade-up" className="max-w-[35rem] lg:max-w-max">
              We’re proud to be a part of our clients’ success stories. Ready to
              create yours? Reach out to us today, and let’s craft something
              remarkable together!
            </p>
          </div>
          <form
            onSubmit={handleSubmit(handleFormSubmit)}
            data-aos="fade-up"
            className="flex flex-col gap-1"
          >
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="flex flex-col">
                <label htmlFor="" className="text-sm ml-1">
                  Name
                </label>
                <input
                  type="text"
                  className="border outline-none border-secondary bg-black/5 rounded-sm p-2"
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
                  className="border outline-none border-secondary bg-black/5 rounded-sm p-2"
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
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="flex flex-col">
                <label htmlFor="" className="text-sm ml-1">
                  Phone
                </label>
                <input
                  type="tel"
                  className="border outline-none border-secondary bg-black/5 rounded-sm p-2"
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
                  className="border outline-none border-secondary bg-black/5 rounded-sm p-2"
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
                <small className="error-message">
                  {errors.subject?.message}
                </small>
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-sm ml-1">
                Message
              </label>
              <textarea
                type="text"
                className="border outline-none border-secondary bg-black/5 rounded-sm p-2"
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
              className="px-4 py-3 text-white bg-secondary rounded-sm w-full max-w-[50%]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InquiryForm;
