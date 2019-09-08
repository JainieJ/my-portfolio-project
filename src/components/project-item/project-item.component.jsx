import React from "react";
import "./project-item.styles.scss";

const ProjectItem = () => {
  return (
    <div className="row">
      <div className="project">
        {/* <iframe
          src="https://bakery-proj-react.netlify.com/"
          title="sweet-store"
          scrolling="no"
          className="project__sample"
        ></iframe> */}
        <h3 className="project__title u-margin-bottom-sm">
          Sweet Store E-Commerce
        </h3>
        <p className="project__info">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat odio
          assumenda eius quae a eaque quas adipisci autem architecto quam. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Veniam dignissimos
          amet velit ullam fugiat corrupti aut reiciendis dolorem, consequuntur
          a esse et cumque vel ipsam. Nihil expedita odit dolore iste.
        </p>
      </div>
    </div>
  );
};

export default ProjectItem;
