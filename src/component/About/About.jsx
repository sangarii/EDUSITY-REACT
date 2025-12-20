import React from "react";
import "./About.css";
import about_img from "../../asset/about.png";
import play_icon from "../../asset/play-icon.png";
const About = ({setPlayState}) => {
  return (
    <section className="about container">
      <figure className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" onClick={()=>{setPlayState(true)}} />
      </figure>
      <article className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Embark on transformative educational journeo
          y with our university's
          comprehensive education programs. Our cutting-edge curriculam is
          designed to empower students with the knowledge, skills, and
          exlperiences needed to excel in the dynamic fiedl of education.
        </p>
        <p>
          With a focus on innovation, hands-on learning, and personalized
          mentorship, our programs prepare aspiring educators to make a
          meaningful impact in classrooms, schools, and communities.
        </p>
        <p>
          Whether you aspire to become a teacher, administrator, counselor, or
          educational leader, our diverse range of programs offers the perfect
          pathway to achieve your goals and unlock your full potential in
          shaping the future of education.
        </p>
      </article>
    </section>
  );
};

export default About;
