import React, { useEffect, useRef } from "react";
import img from "../Data/undraw_Project_completed_re_jr7u.png";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import projects from "../json/projects";
import { gsap } from "gsap";
import { Power2 } from "gsap/all";
import { Link } from "react-router-dom";
import ShowMore from "react-show-more";

const Project = ({ animations }) => {
  useEffect(() => {
    gsap.fromTo(
      "#leftPro",
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: Power2.easeInOut,
      }
    );
    gsap.fromTo(
      "#rightPro",
      { x: 200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: Power2.easeInOut,
      }
    );
  }, [animations]);

  let ref = useRef([]);
  let proHead = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: "#second",
          start: "top 100%",
          scrub: true,
          end: "top 70%",
        },
        stagger: 1,
      }
    );
  }, []);

  return (
    <div className="mobile:mx-[2vw] md:mx-[5vw] mb-10">
      <div className="flex items-center justify-between">
        <h1
          id="leftPro"
          className="md:mt-6 mobile:mt-14 mobile:text-3xl md:text-6xl font-bold text-oceanGreen"
        >
          Projects
        </h1>
        <img
          id="rightPro"
          src={img}
          alt={img}
          className="mix-blend-multiply md:w-[30%] mobile:w-[50%]"
        />
      </div>
      <div
        ref={proHead}
        className="grid mobile:grid-cols-1 md:grid-cols-3 mobile:gap-0 md:gap-7 mobile:px-1 md:px-5 items-start mobile:mt-2 md:mt-0"
      >
        {projects
          .slice(0)
          .reverse()
          .map((e, i) => {
            return (
              <div
                ref={(element) => {
                  ref.current[i] = element;
                }}
              >
                <Block data={e} key={i} />
              </div>
            );
          })
          .reverse()}
      </div>
    </div>
  );
};

const Block = ({ data, key }) => {
  // console.log(data);
  return (
    <div
      key={data}
      className="border md:mb-0 mobile:mb-5 rounded-md border-oceanGreen bg-white text-grey cursor-pointer oceanHover mb-4 mobile:w-[100%] md:w-[95%] mx-auto"
    >
      <Link to={`/viewone/${data?.id}`} state={{ data: data }} className="link">
        <img
          src={data?.img}
          alt={data?.img}
          className="rounded-lg p-0.5 mobile:h-[23vh] md:h-[27.5vh] w-full object-cover object-center"
        />
      </Link>
      <div className="px-2.5 pt-0.5">
        <h1 className="text-2xl font-bold text-oceanGreen">{data?.name}</h1>
        <p className="font-semibold opacity-90">{data?.title}</p>

        {/* <p>{data?.desc?.split(0, 40)}</p> */}

        <Link className="linkofproject mb-2" target="blank" to={data?.url}>
          {data?.url}
        </Link>
        <div className="flex items-center mt-1.5 flex-wrap mr-12">
          {data?.skills?.map((e) => {
            return <Tile title={e} />;
          })}
        </div>
        <div className="flex justify-end -mb-6">
          <div>
            <button
              className="bg-oceanGreen px-2 py-1.5 rounded-md mx-2 oceanHover"
              onClick={(e) => {
                e.preventDefault();
                data.github.map((e) => {
                  window.open(e);
                });
              }}
            >
              <AiFillGithub size={30} color="white" />
            </button>
            <button
              onClick={() => window.open(data?.url)}
              className="bg-oceanGreen px-2 py-1.5 rounded-md mx-2 oceanHover"
            >
              <AiOutlineLink size={30} color="white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Tile = ({ title }) => {
  return (
    <div
      key={title}
      className="border border-grey px-2 text-center py-0.5 mr-1 rounded-md text-sm mb-1.5"
    >
      {title}
    </div>
  );
};

export default Project;
