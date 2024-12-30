import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component"; // For optimized image loading
import Experience from "../../components/Experience";
import Testimonials from "../../components/Testimonials";
import BrandLogos from "../../components/BrandLogos";
import Footer from "../../components/Footer";
import LeadForm from "../../components/LeadForm";
import line from "../../assets/images/line.png";
import {
  companyDetails,
  industriesCompanyServe,
  servicesList,
} from "../../constant";
import aboutImg from "../../assets/images/home-aboutus.webp";
import whoWeAre from "../../assets/images/who-we-are.webp";
import ServiceItemCard from "../../components/Website/ServiceItemCard";
import { Link } from "react-router-dom";
import WorkFlow from "../../components/WorkFlow";

// Lazy load components for better performance
const Header = React.lazy(() => import("../../components/Website/Header"));
const Banner = React.lazy(() => import("../../components/Website/Banner"));

// Schema markup for Local Business
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Eskaliotech Solutions",
  description:
    "Eskaliotech Solutions is a globally recognized leader in delivering cutting-edge technology solutions including AI, Machine Learning, Blockchain, and Cloud Computing.",
  image: companyDetails.logo,
  address: {
    "@type": "PostalAddress",
    streetAddress: "10-47 Ambedkar Nagar, Jawaharnagar",
    addressLocality: "Turumalagiri",
    addressRegion: "Telangana",
    postalCode: "500087",
    addressCountry: "India",
  },
};

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          Eskaliotech Solutions - Your Partner in AI & Technology Solutions
        </title>
        <meta
          name="description"
          content="Discover Eskaliotech Solutions, your trusted partner for AI, Machine Learning, Blockchain, and custom software development. Transform your business with our innovative technology solutions."
        />
        <meta
          name="keywords"
          content="AI, Machine Learning, Blockchain, Custom Software Development, Technology Solutions"
        />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Eskaliotech Solutions - Your Partner in AI & Technology Solutions"
        />
        <meta
          property="og:description"
          content="Transform your business with innovative AI, Machine Learning, and Blockchain solutions from Eskaliotech Solutions."
        />
        <meta property="og:image" content={aboutImg} />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Eskaliotech Solutions - Your Partner in AI & Technology Solutions"
        />
        <meta
          name="twitter:description"
          content="Transform your business with innovative AI, Machine Learning, and Blockchain solutions."
        />
        <meta name="twitter:image" content={aboutImg} />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      <div className="landing-bg">
        <Header />
        <Banner />

        <main>
          <section
            className="wrapper pt-[4rem] pb-10 flex flex-col items-center gap-5 z-10"
            aria-label="About Company"
          >
            <div data-aos="fade-up" className="flex items-center gap-3">
              <LazyLoadImage
                src={line}
                alt="Decorative line"
                className="w-[3rem]"
              />
              <h2 className="font-medium text-secondary">About Company</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-10 md:mb-[7rem]">
              <div className="relative" data-aos="fade-right">
                <LazyLoadImage
                  src={whoWeAre}
                  width="500"
                  height="400"
                  alt="Eskaliotech Solutions company overview"
                  className="rounded-lg h-[20rem] md:h-full md:max-h-[25rem] w-full object-cover object-right"
                />
                <div className="w-full sm:w-fit sm:max-w-[18rem] text-white h-full sm:h-fit absolute md:-bottom-[5rem] bottom-0 left-0 bg-secondary/70 sm:bg-secondary p-5 rounded-lg">
                  <h3 className="text-5xl font-bold text-white">3+</h3>
                  <p className="font-medium mt-3 text-white">
                    Years of Experience
                  </p>
                  <p className="pl-5 border-l-2 border-white text-md mt-3 text-white">
                    Your reliable partner for innovative software development
                    solutions.
                  </p>
                </div>
              </div>
              <div data-aos="fade-right" className="flex flex-col gap-5">
                <h2 className="heading-2">
                  Welcome to Eskaliotech Solutions – Empowering Innovation
                  Through Technology
                </h2>
                <p>
                  At Eskaliotech, we believe that technology is the foundation
                  for progress and transformation. Established with a passion
                  for innovation, we specialize in delivering world-class IT
                  solutions that cater to businesses of all sizes, from budding
                  startups to global enterprises.
                </p>
                <Link to="/about-us" className="primary-btn mt-7 w-fit">
                  Know More About Us
                </Link>
              </div>
            </div>
          </section>

          <section
            id="services"
            className="w-screen min-h-[70vh] flex justify-center relative pt-[3rem]"
            aria-label="Our Services"
          >
            <div className="blurred-blue left-[-10%] top-[-10%]"></div>
            <div className="wrapper py-10 flex flex-col items-center gap-5 z-10">
              <div data-aos="fade-up" className="flex items-center gap-3">
                <LazyLoadImage
                  src={line}
                  alt="Decorative line"
                  className="w-[3rem]"
                />
                <h2 className="font-medium text-secondary capitalize">
                  Our Services
                </h2>
              </div>
              <h1 data-aos="fade-up" className="heading text-center">
                What We Offer
              </h1>
              <p data-aos="fade-up" className="text-center max-w-2xl">
                At Eskaliotech Solutions, we offer a full range of advanced
                technology services designed to empower businesses with
                scalable, intelligent, and secure solutions.
              </p>
              <div
                data-aos="fade-up"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-10 mx-auto max-w-6xl"
              >
                {servicesList.map((item) => (
                  <ServiceItemCard key={item.title} item={item} />
                ))}
              </div>
            </div>
          </section>

          <section
            className="wrapper py-[2rem] flex flex-col gap-3"
            aria-label="Industries We Serve"
          >
            <div className="flex flex-col gap-3">
              <h2 data-aos="fade-up" className="heading text-center">
                Industries We Serve
              </h2>
              <p data-aos="fade-up" className="mt-2 text-center mb-3">
                We cater to a wide range of industries, delivering tailored AI
                and tech solutions to meet specific needs:
              </p>
            </div>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-7">
              {industriesCompanyServe.map((item) => (
                <div
                  key={item.id}
                  data-aos="fade-up"
                  className="p-5 rounded-lg shadow-lg relative group overflow-hidden min-h-[12rem]"
                >
                  <LazyLoadImage
                    width="200"
                    height="100"
                    src={item.img}
                    alt={`${item.title} industry solutions`}
                    className="w-full h-full object-cover absolute top-0 left-0 rounded group-hover:scale-110 transition-all duration-300"
                  />
                  <div className="w-full h-full absolute top-0 left-0 bg-white/65 group-hover:bg-black/60 transition-all duration-300"></div>
                  <h3 className="text-center text-[1.3rem] font-medium relative z-10 group-hover:text-white transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="text-black text-md mt-2 relative z-10 group-hover:text-white transition-all duration-300">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <WorkFlow />
          </section>

          <Experience />
          <Testimonials />
          <BrandLogos />
          <LeadForm />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
