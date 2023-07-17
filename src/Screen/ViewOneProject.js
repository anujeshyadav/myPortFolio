import React, { useEffect, useState, useRef } from "react";
import img from "../Data/undraw_Project_completed_re_jr7u.png";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
// import projects from "../json/projects";
import { gsap } from "gsap";
import { Power2 } from "gsap/all";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const ViewOneProject = ({ animations, args, props }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [Images, setImages] = useState([]);
  const recommendation = useRef(null);
  const referrelHead = useRef(null);

  const location = useLocation();

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === Images?.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? Images?.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  useEffect(() => {
    // console.log(location.state?.data?.Arrimg);
    let newarr = location?.state?.data?.Arrimg;

    // console.log(newarr);
    setImages(newarr);
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
      referrelHead.current,
      { x: 200, opacity: 0 },
      {
        x: 0,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#leftPro",
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
          trigger: "#leftPro",
          scrub: true,
          start: window.innerWidth < 550 ? "top 90%" : "top 70%",
          end: window.innerWidth < 550 ? "top 65%" : "top 50%",
        },
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

  const slides = Images?.map((item, i) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={i}
      >
        <img src={item?.img} alt="image" />
        <CarouselCaption
          // captionText={item.caption}
          captionHeader={item.caption}
          cssModule="customclassforcarosel"
        />
      </CarouselItem>
    );
  });

  return (
    <>
      <div className="mobile:mx-[2vw] md:mx-[5vw] mb-10">
        <section className="py-3">
          <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            {...args}
          >
            <CarouselIndicators
              items={Images}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={previous}
            />
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={next}
            />
          </Carousel>
        </section>
        <div className="flex items-center justify-between">
          <h1
            id="leftPro"
            className="md:mt-2 mobile:mt-6 mobile:text-4xl md:text-4xl font-bold text-oceanGreen"
          >
            Deails Projects Page
          </h1>
          <img
            id="rightPro"
            src={img}
            alt={img}
            className="mix-blend-multiply md:w-[30%] mobile:w-[50%]"
          />
        </div>
        <div className="d-flex justify-content-center mt-2">
          <h1 className="py-2 titleofviewone">
            {" "}
            {location?.state?.data?.name}
          </h1>
        </div>
        <div>
          <h6
            style={{ lineHeight: "34px" }}
            className="py-2 container description "
          >
            {location?.state?.data?.D_desc}
          </h6>
        </div>

        {/* <div
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
                <Block data={e} key={i} />;
              </div>
            );
          })}
      </div> */}
      </div>
    </>
  );
};

// const Block = ({ data, key }) => {
//   return (
//     <div className="border md:mb-0 mobile:mb-5 rounded-md border-oceanGreen bg-white text-grey cursor-pointer oceanHover mb-4 mobile:w-[100%] md:w-[95%] mx-auto">
//       <Link to={{ pathname: "/", state: data }}>
//         <img
//           src={data?.img}
//           alt={data?.img}
//           className="rounded-lg p-0.5 mobile:h-[23vh] md:h-[27.5vh] w-full object-cover object-center"
//         />
//       </Link>
//       <div className="px-2.5 pt-0.5">
//         <h1 className="text-2xl font-bold text-oceanGreen">{data?.name}</h1>
//         <pf className="font-semibold opacity-90">{data?.title}</pf>
//         <p>{data?.desc.slice(0, 98)}</p>
//         <Link className="linkofproject" target="blank" to={data?.url}>
//           {data?.url}
//         </Link>
//         <div className="flex items-center mt-1.5 flex-wrap mr-12">
//           {data?.skills?.map((e) => {
//             return <Tile title={e} />;
//           })}
//         </div>
//         <div className="flex justify-end -mb-6">
//           <div>
//             <button
//               className="bg-oceanGreen px-2 py-1.5 rounded-md mx-2 oceanHover"
//               onClick={(e) => {
//                 e.preventDefault();
//                 data.github.map((e) => {
//                   window.open(e);
//                 });
//               }}
//             >
//               <AiFillGithub size={30} color="white" />
//             </button>
//             <button
//               onClick={() => window.open(data?.url)}
//               className="bg-oceanGreen px-2 py-1.5 rounded-md mx-2 oceanHover"
//             >
//               <AiOutlineLink size={30} color="white" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const Tile = ({ title }) => {
  return (
    <div className="border border-grey px-2 text-center py-0.5 mr-1 rounded-md text-sm mb-1.5">
      {title}
    </div>
  );
};

export default ViewOneProject;
