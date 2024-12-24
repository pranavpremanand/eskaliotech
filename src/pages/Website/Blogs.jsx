import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Website/Header";
import Footer from "../../components/Footer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import line from "../../assets/images/line.png";
import bannerImg from "../../assets/images/blogs-banner.webp";

export const blogs = [
  {
    id: 1,
    image:
      "https://rejolut.com/wp-content/uploads/2024/02/DALL%C2%B7E-2024-02-20-16.55.07-Create-a-wide-banner-image-for-the-topic-_Top-18-Artificial-Intelligence-AI-Applications-in-2024._-This-image-should-visually-represent-a-diverse-ra-1024x585.webp",
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu7-HVWQHxnNuywiR26jyAgbY1vBXIwAAS9w&s",
  },
  {
    id: 3,
    image:
      "https://itbrief.com.au/uploads/story/2023/11/27/img-d320oqYWscvU8q8HLX0brOyX.webp",
  },
  {
    id: 4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4GQuewxLfMh2olMxwVIVsJmu1qFf5Q4dwZw&s",
  },
];
const Blogs = () => {
  return (
    <>
      <Header />
      <div className="min-h-[45vh] md:min-h-[70vh] w-full page-banner relative">
        <img
          loading="lazy"
          src={bannerImg}
          width="800"
          height="600"
          className="absolute h-full w-full object-cover object-top z-0"
          alt=""
        />
        <div className="absolute h-full w-full bg-black/40"></div>
        <div className="absolute z-10 py-2 top-[50%] left-1/2 -translate-x-1/2 w-full flex flex-col items-center px-3">
          <h1 data-aos="fade-up" className="heading text-white text-center">
            Blogs
          </h1>
          <div
            data-aos="fade-up"
            className="mt-3 text-base sm:text-xl font-medium px-3 py-2 w-fit flex flex-wrap justify-center text-white items-center gap-1 sm:gap-2"
          >
            <Link to="/">Home</Link>/<Link to="/blogs">Blogs</Link>
          </div>
        </div>
      </div>
      <div className="bg-secondary/5 relative text-primary_text">
        <div className="py-[5rem] flex flex-col gap-5 items-center wrapper">
          <div data-aos="fade-up" className="flex items-center gap-3">
            <LazyLoadImage
              src={line}
              alt="Decorative line"
              className="w-[3rem]"
            />
            <h2 className="font-medium text-secondary">Blogs</h2>
          </div>
          <h4
            data-aos="fade-up"
            className="heading-2 mx-auto font-semibold leading-tight text-primary text-center"
          >
            Insights and Innovations: Your Gateway to IT Excellence
          </h4>
          <div className="mt-[2rem] grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7">
            {blogs.map((blog) => (
              <BlogItem key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;

// blog item
export const BlogItem = ({ blog }) => {
  return (
    <div
      data-aos="fade-up"
      className="bg-secondary/10 rounded-xl p-5 text-primary_text relative z-10 group"
    >
      <Link to={`/blogs/${blog.id}`}>
        <img
          src={blog.image}
          alt=""
          width="600"
          height="400"
          className="bg-cover aspect-video w-full rounded-xl group-hover:opacity-85 transition-all duration-200"
        />
      </Link>
      <div className="flex justify-start font-light mt-[0.8rem]"></div>
      <div className="flex flex-col gap-2 mt-[1rem]">
        <Link
          to={`/blogs/${blog.id}`}
          className="text-xl hyphen-auto font-medium leading-tight line-clamp-2 text-ellipsis hover:text-tertiary transition-all duration-200"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora iure
          neque nihil
          {/* {blog.title} */}
        </Link>
        <p className="desc leading-tight text-gray-800 line-clamp-3 text-ellipsis hyphen-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
          porro excepturi et eos corrupti magnam vel voluptatibus aperiam atque
          voluptatum dolor ullam alias similique hic aliquam provident minima
          cumque doloremque!
        </p>
        {/* <div
          dangerouslySetInnerHTML={{ __html: blog.content }}
          className="leading-tight text-gray-800 line-clamp-3 text-ellipsis hyphen-auto"
        ></div> */}
      </div>

      {/* <div className="flex justify-end font-light mt-[1.5rem]">
        <p className="text-gray-400 text-[.8rem]">12th May 2023</p>
      </div> */}
      <div className="mt-6 w-full flex justify-center">
        <Link to={`/blogs/${blog.id}`} className="secondary-btn w-full">
          Read More
        </Link>
      </div>
    </div>
  );
};
