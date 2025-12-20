import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../asset/next-icon.png";
import back_icon from "../../asset/back-icon.png";
import user_1 from "../../asset/user-1.png";
import user_2 from "../../asset/user-2.png";
import user_3 from "../../asset/user-3.png";
import user_4 from "../../asset/user-4.png";

const Testimonials = () => {
  const slider = useRef(null);
  const tx = useRef(0);

  const slideForward = () => {
    if (tx.current > -50) {
      tx.current -= 25;
    }
    slider.current.style.transform = `translateX(${tx.current}%)`;
  };

  const slideBackward = () => {
    if (tx.current < 0) {
      tx.current += 25;
    }
    slider.current.style.transform = `translateX(${tx.current}%)`;
  };

  return (
    <section className="testimonials testi-container">
      <div className="testi-container testimonials-inner">
        <img
          src={back_icon}
          alt="back"
          className="back-btn"
          onClick={slideBackward}
        />
        <img
          src={next_icon}
          alt="next"
          className="next-btn"
          onClick={slideForward}
        />

        <div className="slider">
          <ul ref={slider}>
            {[user_1, user_2, user_3, user_4].map((user, i) => (
              <li key={i}>
                <article className="slide">
                  <header className="user-info">
                    <img src={user} alt="" />
                    <div>
                      <h3>William Jackson {i + 1}</h3>
                      <span>Edusity, USA</span>
                    </div>
                  </header>
                  <p>
                    Choosing to pursue my degree at Edusity was one of the best
                    decisions I've ever made. The supportive community,
                    state-of-the-art facilities, and commitment to academic
                    excellence have truly exceeded my expectations.
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
