import React, { useEffect, useState } from "react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  const [videosource, setvideosource] = useState(
    window.innerWidth < 786 ? smallHeroVideo : heroVideo
  );
  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 2,
    });
    gsap.to("#cta", { opacity: 1, y: -50, delay: 2 });
  }, []);
  function handleVideoSrc() {
    if (window.innerWidth < 786) {
      setvideosource(smallHeroVideo);
    } else {
      setvideosource(heroVideo);
    }
  }
  useEffect(() => {
    window.addEventListener("resize", handleVideoSrc);

    return () => {
      window.removeEventListener("resize", handleVideoSrc);
    };
  }, []);
  return (
    <section className="nav-height w-full bg-black relative ">
      <div className="h-full w-full flex items-center  justify-center flex-col">
        <p id="hero" className="hero-title ">
          Iphone 16 pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video
            autoPlay
            muted
            playsInline={true}
            key={videosource}
            className=" pointer-events-none"
          >
            <source src={videosource} type="video/mp4" />
          </video>
        </div>
        <div
          id="cta"
          className=" flex flex-col items-center opacity-0 translate-y-20"
        >
          <a href="#hightlights" className="btn ">
            Buy now
          </a>
          <p className="font-normal text-xl">From $199/month or $999</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
