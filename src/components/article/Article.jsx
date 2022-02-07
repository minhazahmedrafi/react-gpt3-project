import React from "react";
import "./article.css";

const Article = ({ imgUrl, date, text }) => {
  return (
    <>
      <div className="gpt3_blog_container_article">
        <div className="gpt3_blog_container_article_img">
          <img src={imgUrl} alt="blogImg" />
        </div>
        <div className="gpt3_blog_container_article_content">
          <div>
            <p>{date}</p>
            <h3>{text}</h3>
          </div>
          <p>Read Full Article</p>
        </div>
      </div>
    </>
  );
};

export default Article;
