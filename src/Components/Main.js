import React, { useEffect, useRef } from "react";

import img from "../Data/myimage.png";
import pdf from "../Data/Anujesh Yadav Resume.pdf";
import skills from "../Data/My project.png";
import referrels from "../Data/referrels.png";
import recommandations from "../json/recommandations";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useTypewriter } from "react-simple-typewriter";
import { gsap, Power2 } from "gsap";
import ScrollTrigger from "gsap";
import sveltose from "./../Data/images.png";
import SocialMedia from "./SocialMedia";

import html from "../Data/icons/html.png";
import css from "../Data/icons/css-3.png";
import javascript from "../Data/icons/js.png";
// import typescript from "../Data/icons/typescript.png";
import tailwind from "../Data/icons/tailwind.png";
import bootstrap from "../Data/icons/bootstrap.png";
// import nodejs from "../Data/icons/node-js-736399_1280.png";
// import expressjs from "../Data/icons/Expressjs.png";
// import mongodb from "../Data/icons/mongodb.png";
// import mongoose from "../Data/icons/mongoose.png";
import git from "../Data/icons/git.png";
import github from "../Data/icons/github.png";
// import c from "../Data/icons/letter-c.png";
// import cplus from "../Data/icons/c++.png";
import npm from "../Data/icons/npm.png";
// import python from "../Data/icons/python.png";
import { AiOutlineLinkedin } from "react-icons/ai";

const Main = ({ animations }) => {
  const image = useRef(null);
  const referrelsImage = useRef(null);
  const referrelHead = useRef(null);
  const recommendation = useRef(null);

  const [text] = useTypewriter({
    words: [
      // "MERN Stack Web Developer",
      // "Stand Alone Hackathon Winner",
      "Over 2 year of Experience",
      "Experience as a React Developer",
      "Worked On Many Live Projects",
    ],
    loop: 0,
  });

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      "#content",
      { y: 500, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        delay: -0.2,
        scrollTrigger: {
          trigger: "mainDiv",
          start: "top 1%",
          end: "top 1%",
        },
        ease: Power2.easeInOut,
      }
    );
    gsap.fromTo(
      "#img",
      { y: -500, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        delay: -0.2,
        scrollTrigger: {
          trigger: "mainDiv",
          start: "top 1%",
          end: "top 1%",
        },
        ease: Power2.easeInOut,
      }
    );
  }, [animations]);

  useEffect(() => {
    gsap.fromTo(
      "#skillHead",
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: "#mainDiv",
          scrub: true,
          start: window.innerWidth < 550 ? "top 50%" : "top 90%",
          end: window.innerWidth < 550 ? "top 10%" : "top 50%",
        },
      }
    );
    gsap.fromTo(
      image.current,
      { x: 200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: "#mainDiv",
          scrub: true,
          start: window.innerWidth < 550 ? "top 50%" : "top 90%",
          end: window.innerWidth < 550 ? "top 10%" : "top 50%",
        },
      }
    );
    gsap.fromTo(
      referrelsImage.current,
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: "#skillHead",
          scrub: true,
          start: window.innerWidth < 550 ? "top 100%" : "top 90%",
          end: window.innerWidth < 550 ? "top 60%" : "top 50%",
        },
      }
    );
    gsap.fromTo(
      referrelHead.current,
      { x: 200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: "#skillHead",
          scrub: true,
          start: window.innerWidth < 550 ? "top 100%" : "top 90%",
          end: window.innerWidth < 550 ? "top 60%" : "top 50%",
        },
      }
    );
    gsap.fromTo(
      recommendation.current,
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: "#skillHead",
          scrub: true,
          start: window.innerWidth < 550 ? "top 90%" : "top 70%",
          end: window.innerWidth < 550 ? "top 65%" : "top 50%",
        },
      }
    );
  }, []);

  return (
    <div id="mainDiv">
      <div className="md:mt-6 mobile:mt-0 flex md:flex-row mobile:flex-col justify-center w-[100%] items-center md:px-[5vw] mobile:px-[1.5vw]">
        <div className="md:w-[32%] mobile:w-[85%] h-[100%] overflow-hidden relative">
          <img src={img} id="img" className="w-full h-full" alt="" />
        </div>
        <div className="md:ml-10 mobile:ml-0 text-grey md:w-[65%] mobile:w-[100%] md:h-[65vh] mobile:h-[60vh] overflow-hidden flex items-center">
          <div
            className="absolute mobile:flex mobile:flex-col mobile:justify-center mobile:items-center md:block"
            id="content"
          >
            <p className="text-grey md:text-5xl mobile:text-3xl font-semibold">
              Hi, I am
            </p>
            <p className="text-indigo-500 mobile:text-4xl md:text-6xl md:py-4 mobile:py-1 font-bold">
              Anujesh Yadav
            </p>
            <p className="md:text-5xl mobile:text-2xl font-semibold md:h-[9vh] mobile:h-[5vh]">
              {text}
            </p>
            <p className="md:mt-2 mb-2 mobile:mt-1 mb-2 md:mx-0 mobile:mx-4 md:text-start mobile:text-center font-semibold ml-1">
              Adept React developer with a demonstrated history of success.
              Skilled in web application development. Currently Working as a
              React Developer
              <br />
              {/* <b> */}
              <div className="text-md font-semibold">
                <h3 className="mt-2 mb-2">
                  <u>Presently Woking At : -</u>
                </h3>

                <img
                  style={{ borderRadius: "16px" }}
                  src={sveltose}
                  width="250px"
                  height="80px"
                  className="py-3"
                />
                <span className="mb-2"> Sveltose Technology Pvt ltd...</span>
              </div>
              {/* </b> */}
            </p>
            <div className="flex items-center mt-1 ml-1">
              <a
                href={pdf}
                target="_blank"
                style={{ transition: "all 0.25s ease-in-out" }}
                className=" py-2 text-oceanGreen border px-4 mr-4 py-1 rounded-md border-oceanGreen cursor-pointer hover:bg-oceanGreen hover:text-lightWhite"
              >
                Resume
              </a>
              {/* <button
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://www.buymeacoffee.com/anekantjain");
                }}
                className="oceanHover text-lightWhite bg-oceanGreen px-4 py-1 my-3 rounded-md cursor-pointer"
              >
                Buy me a Coffee ☕
              </button> */}
            </div>
            <div className="ml-1 py-2">
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
      <div className="md:px-[8vw] mobile:px-[4.5vw] overflow-hidden">
        <div className="flex justify-between items-end md:px-4 mobile:px-2 w-[100%]">
          <h1
            id="skillHead"
            className="md:text-5xl mobile:text-3xl text-oceanGreen font-bold md:mb-4 mobile:mb-2"
          >
            Skills
          </h1>
          <img
            ref={image}
            src={skills}
            alt="Skills"
            className="md:w-[20%] mobile:w-[40%] md:-mb-12 mobile:-mb-6"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div
            id="socialIcons"
            className="grid mb-10 md:grid-cols-8 justify-items-center border mobile:grid-cols-4 rounded-xl bg-white overflow-hidden px-[2vw] mobile:py-[4vw] md:py-[1.5vw]"
          >
            <Icon src={html} title={"Html"} />
            <Icon src={css} title={"CSS"} />
            <Icon src={bootstrap} title={"Bootstrap"} />
            <Icon src={tailwind} title={"Tailwind css"} />
            <Icon src={javascript} title={"JavaScript"} />
            {/* <Icon src={typescript} title={"TypeScript"} /> */}
            <Icon src={npm} title={"NPM"} />
            {/* <Icon src={nodejs} title={"Node.js"} /> */}
            {/* <Icon src={expressjs} title={"Express.js"} /> */}
            {/* <Icon src={mongodb} title={"MongoDB"} /> */}
            {/* <Icon src={mongoose} title={"Mongoose"} /> */}
            <Icon src={git} title={"Git"} />
            <Icon src={github} title={"Github"} />
            {/* <Icon src={c} title={"C"} /> */}
            {/* <Icon src={python} title={"Python"} /> */}
            {/* <Icon src={cplus} title={"C++"} /> */}
          </div>
        </div>
      </div>
      {/* <div className="md:px-[8vw] mobile:px-[4.5vw] overflow-hidden mt-4">
        <div className="flex md:flex-row mobile:flex-col-reverse justify-between md:px-4 mobile:px-2 md:items-end mobile:items-baseline w-[100%]">
          <img
            ref={referrelsImage}
            src={referrels}
            alt="Skills"
            className="md:w-[25%] z-10 mobile:w-[55%] md:-mb-14 mobile:-mb-10 mobile:self-start"
          />
          <h1
            ref={referrelHead}
            className="md:text-5xl mobile:text-3xl text-oceanGreen font-bold md:mb-4 mobile:mb-2 self-center"
          >
            Endorsements
          </h1>
        </div>
        <div className="flex flex-col justify-center">
          <div
            ref={recommendation}
            className="mb-10 border rounded-xl bg-white mobile:pb-[3vw] md:pb-[1.5vw] mobile:pt-12 md:pt-16"
          >
            <Carousel
              showArrows={true}
              showThumbs={false}
              autoPlay={true}
              infiniteLoop={true}
              interval={2000}
              swipeable={true}
              emulateTouch={true}
            >
              {recommandations.map((card, index) => {
                return <Block data={card} key={index} />;
              })}
            </Carousel>
          </div>
        </div>
      </div> */}
    </div>
  );
};

const Block = ({ data }) => {
  return (
    <div className="mobile:px-[7vw] md:px-[3vw] mobile:pb-9 md:pb-6">
      <p className="text-center text-darkGrey text-lg">
        {data.message.length > 300
          ? data.message.slice(0, 300) + "..."
          : data.message}
      </p>
      <div className="flex justify-end mr-[1vw] mobile:mt-2 md:mt-1.5">
        <div>
          <div
            className="flex items-center"
            onClick={(e) => {
              e.preventDefault();
              window.open(data.url);
            }}
          >
            <AiOutlineLinkedin size={20} />
            <h1 className="cursor-pointer text-grey text-lg text-end font-semibold">
              - {data.name}
            </h1>
          </div>
          <p className=" text-end text-sm text-gray-800">{data.position}</p>
        </div>
      </div>
    </div>
  );
};

const Icon = ({ src, title }) => {
  useEffect(() => {
    gsap.fromTo(
      "#div",
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: "#mainDiv",
          scrub: true,
          start: window.innerWidth < 550 ? "top 40%" : "top 70%",
          end: window.innerWidth < 550 ? "top 10%" : "top 30%",
        },
      }
    );
  }, []);

  return (
    <div
      title={title}
      id="div"
      className="relative m-auto mobile:w-[13vw] mobile:h-[13vw] md:w-[5.5vw] md:h-[5.5vw] object-cover object-center flex justify-center items-center md:my-6 mobile:my-3 transition-all hover:pb-12"
    >
      <img className="absolute" src={src} alt={title} />
    </div>
  );
};

export default Main;
