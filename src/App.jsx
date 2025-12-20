import React, { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Hero/Hero";
import Programs from "./component/Programs/Programs";
import Title from "./component/Title/Title";
import About from "./component/About/About";
import Campus from "./component/Campus/Campus";
import Testimonials from "./component/Testimonials/Testimonials";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
import VideoPlayer from "./component/VideoPlayer/VideoPlayer";

const App = () => {

  const[playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <Title subTitle="OUR PROGRAM" title="What We Offer" />
      <Programs />
      <About setPlayState={setPlayState} />
      <Title subTitle="GALLERY" title="Campus Photos" />
      <Campus />
      <Title subTitle="TESTIMONIALS" title="What Student Says" />
      <Testimonials />
      <Title subTitle="CONTACT US" title="Get in Touch" />
      <Contact />
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
      <Footer />
    </div>
  );
};

export default App;
