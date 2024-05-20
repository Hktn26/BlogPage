// eslint-disable-next-line no-unused-vars
import React from "react";
import BlogPage from "../components/BlogPage";
import Banner from "../components/Banner";

const Blogs = () => {
  return (
    <div>
      <Banner/>
      {/* all blogs container */}
      <div className="max-w-7x1 mx-auto">
        <BlogPage/>
      </div>
    </div>
  );
};

export default Blogs;
