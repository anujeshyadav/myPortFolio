import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Expo } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Home from "./Screen/Home";
import img from "../src/Data/halfimage.png";
// import img from "../src/Data/backgroundnature.jpg";

const App = () => {
  const splash = useRef(null);
  const second = useRef(null);
  const third = useRef(null);
  const [animations, setAnimations] = useState(true);

  let timeline = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    timeline
      .to(splash.current, {
        height: 0,
        duration: 2,
        delay: 2,
        ease: Expo.easeInOut,
      })
      .to(second.current, {
        height: "100%",
        delay: -2.5,
        duration: 2,
        ease: Expo.easeInOut,
      })
      .to(third.current, {
        height: "200%",
        delay: -1,
        duration: 1,
        ease: Expo.easeInOut,
      })
      .call(function () {
        document.getElementById("splash").classList.add("hidden");
        document.getElementById("splash").classList.remove("relative");
        setAnimations(false);
      });
  }, [timeline]);

  useEffect(() => {
    const handleContextmenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextmenu);
    return function cleanup() {
      document.removeEventListener("contextmenu", handleContextmenu);
    };
  }, []);

  return (
    <>
      <div
        id="splash"
        className="h-[100vh] relative w-[100vw] overflow-x-hidden"
      >
        <div
          ref={splash}
          className="absolute bg-teal-100 h-[100%] w-[100%] flex justify-center items-center"
        >
          <p className="text-black text-3xl text-center mx-2">
            Hello,
            <br />
            Welcome to my Portfolio Website
          </p>
          <div
            style={{ borderRadius: "100%" }}
            className="md:w-[40%] mobile:w-[85%] h-[70%] overflow-hidden relative"
          >
            <img src={img} id="img" className="" alt="" />
          </div>
        </div>
        <div
          id="second"
          ref={second}
          className="absolute bg-pink-500	 bottom-0 h-[0%] w-[100%] flex justify-center items-center"
        >
          <div></div>
          <p className="text-lightWhite text-3xl text-center ">
            Hiii,
            <br />
            This is Anujesh Yadav
          </p>
        </div>
        <div
          ref={third}
          className="absolute bg-lightWhite h-[0%] w-[100%]"
        ></div>
      </div>
      <Home animations={animations} />
    </>
  );
};

export default App;
