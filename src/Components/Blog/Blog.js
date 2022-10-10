import React, { Fragment } from "react";
import blogimg1 from "../../Assets/images/blogimg1.jpg";
import blogimg2 from "../../Assets/images/blogimg2.jpg";
import blogimg3 from "../../Assets/images/blogimg3.jpg";
import { BlogCard } from "../../Components";

export const Blog = () => {
  return (
    <Fragment>
      <div className="px-2 md:px-6 lg:px-36 py-10 lg:py-20">
        <div>
          <div className="text-indigo font-semibold py-2">Blog</div>
          <div className="text-2xl sm:text-3xl md:text-4xl font-[700] pb-4">
            Our Latest News
          </div>
          <div className="text-gray leading-7 md:w-50 pb-10">
            Enthusiastically drive revolutionary opportunities before emerging
            leadership. Distinctively transform tactical methods of empowerment
            via resource sucking core.
          </div>
        </div>

        <div className="  md:flex justify-between items-center gap-3">
          <BlogCard
            image={blogimg1}
            date="may 26, 2016"
            comment="30 Comments"
            share=" 5 Share"
            title="Quickly formulate backend"
            description="Synergistically engage effective ROI after customer directed partnerships."
            tag="Lifestyle"
            bgColor=""
          />
          <BlogCard
            image={blogimg2}
            date="Jan 21, 2019"
            comment="45 Comments"
            share=" 10 Share"
            title="Appropriately productize fully"
            description="Some quick example text to build on the card title and make up the bulk."
            tag="Technology"
          />
          <BlogCard
            image={blogimg3}
            date="Apr 25, 2019"
            comment="41 Comments"
            share=" 30 Share"
            title="Appropriately productize fully"
            description="Some quick example text to build on the card title and make up the bulk."
            tag="science"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Blog;
