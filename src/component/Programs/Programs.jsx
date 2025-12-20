import React from "react";
import "./Programs.css";
import program_1 from "../../asset/program-1.png";
import program_2 from "../../asset/program-2.png";
import program_3 from "../../asset/program-3.png";
import program_icon_1 from "../../asset/program-icon-1.png";
import program_icon_2 from "../../asset/program-icon-2.png";
import program_icon_3 from "../../asset/program-icon-3.png";

const Programs = () => {
  return (
    <section className="programs container">
      
      <article className="program">
        <img src={program_1} alt="" />
        <figure className="caption">
          <img src={program_icon_1} alt="" />
          <p>Graduation Degree</p>
        </figure>
      </article>

      <article className="program">
        <img src={program_2} alt="" />
        <figure className="caption">
          <img src={program_icon_2} alt="" />
          <p>Masters Degree</p>
        </figure>
      </article>

      <article className="program">
        <img src={program_3} alt="" />
        <figure className="caption">
          <img src={program_icon_3} alt="" />
          <p>Post Graduation</p>
        </figure>
      </article>
    </section>
  );
};

export default Programs;
