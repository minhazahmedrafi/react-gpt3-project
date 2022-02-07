import React from "react";
import { Article } from "../../components";
import "./blog.css";
import { blog1, blog2, blog3, blog4, blog5 } from "./Imports";
const Blog = () => {
  return (
    <>
      <div className="gpt3_blog section__padding" id="blog">
        <div className="gpt3_blog_heading">
          <h1 className="gradient__text">
            A lot is happening, <br /> We are blogging about it.
          </h1>
        </div>
        <div className="gpt3_blog_container">
          <div className="gpt3_blog_container_groupA">
            <Article
              imgUrl={blog1}
              date="Sep 26, 2021"
              text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            />
          </div>
          <div className="gpt3_blog_container_groupB">
            <Article
              imgUrl={blog2}
              date="Sep 26, 2021"
              text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            />
            <Article
              imgUrl={blog3}
              date="Sep 26, 2021"
              text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            />
            <Article
              imgUrl={blog4}
              date="Sep 26, 2021"
              text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            />
            <Article
              imgUrl={blog5}
              date="Sep 26, 2021"
              text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
