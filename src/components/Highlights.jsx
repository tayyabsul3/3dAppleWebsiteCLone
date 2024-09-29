import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      delay: 1,
      y: 0,
    });
    gsap.to(".link", {
      opacity: 1,
      delay: 1,
      stagger: 0.25,
      y: 0,
    });
  }, []);
  return (
    <section id="highlights" className="bg-zinc common-padding md:px-40 ">
      <div className="flex mb-12   justify-center md:justify-between   md:flex-row flex-col ">
        <h1 id="title" className="section-heading">
          Get the Highlights
        </h1>
        <div className="links flex flex-wrap gap-10">
          <div className="link flex items-center gap-1 justify-center">
            <p>Watch the film</p>
            <img src={watchImg} alt="play" className="mt-1" />
          </div>
          <div className="link flex items-center gap-1 justify-center">
            <p>Watch the event</p>
            <img src={rightImg} alt="" className="mt-2" />
          </div>
        </div>
      </div>
      <VideoCarousel />
    </section>
  );
};

export default Highlights;
