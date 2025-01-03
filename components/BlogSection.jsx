import Image from "next/image";
import React from "react";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      tag: "20 APR",
      desc: "The Covid-19 Epidemic In 2022 Is Back",
      img: "/assets/1.png",
    },
    {
      id: 2,

      tag: "20 APR",
      desc: "The Covid-19 Epidemic In 2022 Is Back",
      img: "/assets/2.png",
    },
    {
      id: 3,

      tag: "20 APR",
      desc: "The Covid-19 Epidemic In 2022 Is Back",
      img: "/assets/3.png",
    },
    {
      id: 4,

      tag: "20 APR",
      desc: "The Covid-19 Epidemic In 2022 Is Back",
      img: "/assets/4.png",
    },
    {
      id: 5,

      tag: "20 APR",
      desc: "The Covid-19 Epidemic In 2022 Is Back",
      img: "/assets/1.png",
    },
    {
      id: 6,

      tag: "20 APR",
      desc: "The Covid-19 Epidemic In 2022 Is Back",
      img: "/assets/2.png",
    },
    {
      id: 7,

      tag: "20 APR",
      desc: "The Covid-19 Epidemic In 2022 Is Back",
      img: "/assets/3.png",
    },
    {
      id: 8,

      tag: "20 APR",
      desc: "The Covid-19 Epidemic In 2022 Is Back",
      img: "/assets/4.png",
    },
  ];
  return (
    <div className="w-full mt-10">
      <div className="text-center">
        <p className="font-semibold uppercase ">Our Blogs</p>
        <h2 className="text-3xl font-bold">Latest News</h2>
      </div>

      <div className=" w-full my-4 mx-auto columns-1 sm:columns-2 md:columns-4 gap-5">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="box relative sm:inline-block max-w-full mb-5 mx-auto w-fit"
          >
            <img src={blog.img} alt="" className="img rounded-lg " />
            <span className="absolute top-2 -left-1 bg-[#003569] py-1 px-2 rounded-r-xl text-white font-medium text-sm ">
              {blog.tag}
            </span>
            <p className="text-white text-sm absolute top-10 bg-black/20 text-wrap py-1 px-2 font-medium ">
              {blog.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
