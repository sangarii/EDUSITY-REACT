import React from "react";
import "./Campus.css";
import gallery_1 from "../../asset/gallery-1.png";
import gallery_2 from "../../asset/gallery-2.png";
import gallery_3 from "../../asset/gallery-3.png";
import gallery_4 from "../../asset/gallery-4.png";
import white_arrow from "../../asset/white-arrow.png";

const galleryImages = [gallery_1, gallery_2, gallery_3, gallery_4];
const Campus = () => {
  return (
    <section className="campus container">
      <figure className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      </figure>

      <button className="btn dark-btn">
        See more here <img src={white_arrow} alt="" />{" "}
      </button>
    </section>
  );
};

export default Campus;
