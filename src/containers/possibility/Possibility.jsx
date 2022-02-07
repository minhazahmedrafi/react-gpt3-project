import React from "react";
import "./possibility.css";
import possibilityImg from "../../images/possibility.png";

const Possibility = () => {
  return (
    <>
      <div className="gpt3_possibility section__padding" id="possibility">
        <div className="gpt3_possibility_img">
          <img src={possibilityImg} alt="" />
        </div>
        <div className="gpt3_possibility_content">
          <h4>Request Early Access to Get Started</h4>
          <h1 className="gradient__text">
            The possibilities are <br /> beyond your imagination
          </h1>
          <p>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <h4>Request Early Access to Get Started</h4>
        </div>
      </div>
    </>
  );
};

export default Possibility;
