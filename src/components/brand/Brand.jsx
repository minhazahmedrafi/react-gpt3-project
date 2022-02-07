import React from "react";
import "./brand.css";
import { google, slack, atlassian, dropbox, shopify } from "./Imports";

const Brand = () => {
  return (
    <>
      <div className="gpt3_brand section__padding">
        <div>
          <img src={google} alt="brandLogo" />
        </div>
        <div>
          <img src={slack} alt="brandLogo" />
        </div>
        <div>
          <img src={atlassian} alt="brandLogo" />
        </div>
        <div>
          <img src={dropbox} alt="brandLogo" />
        </div>
        <div>
          <img src={shopify} alt="brandLogo" />
        </div>
      </div>
    </>
  );
};

export default Brand;
