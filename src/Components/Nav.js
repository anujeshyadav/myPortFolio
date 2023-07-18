import React, { useEffect, useRef, useState } from "react";
import { AiOutlineAlignRight, AiOutlineClose } from "react-icons/ai";
import { gsap, Power2 } from "gsap";
import pdf from "../Data/Anujesh Yadav Resume.pdf";
import img from "../Data/anujlogo.png";
import { useNavigate } from "react-router";

const Nav = () => {
  const [viewNav, setViewNav] = useState(true);
  const ref = useRef(null);
  const navLeft = useRef(null);
  const navRight = useRef(null);
  const history = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      navLeft.current,
      {
        x: -100,
      },
      { x: 0, duration: 1.5, delay: 4.5, ease: Power2.easeInOut }
    );
    gsap.fromTo(
      navRight.current,
      {
        x: 1000,
      },
      { x: 0, duration: 1.5, delay: 4.5, ease: Power2.easeInOut }
    );
  }, []);

  let closeNav = () => {
    gsap.fromTo(
      ref.current,
      {
        y: 0,
      },
      {
        opacity: 0,
        y: -200,
        duration: 1,
        ease: Power2.easeInOut,
      }
    );
    setViewNav(!viewNav);
  };

  return (
    <>
      <div className="backdrop-blur-sm border-b fixed w-[100vw] flex z-30 items-center justify-between text-xl md:px-8 md:py-1 mobile:px-3 mobile:py-2">
        <img
          ref={navLeft}
          src={img}
          alt="Logo"
          onClick={(e) => {
            e.preventDefault();
            history("/");
          }}
          className="cursor-pointer md:w-[8vw] mobile:w-[21vw] object-cover object-top"
        />

        <div ref={navRight}>
          {window.innerWidth < 550 ? (
            <>
              <AiOutlineAlignRight
                size={24}
                className="mr-1"
                onClick={(e) => {
                  e.preventDefault();
                  gsap.fromTo(
                    ref.current,
                    { y: -1000 },
                    {
                      opacity: 1,
                      y: 0,
                      duration: 1,
                      ease: Power2.easeInOut,
                    }
                  );
                  setViewNav(!viewNav);
                }}
              />
              <ul
                ref={ref}
                className={`flex border ${
                  !viewNav ? "block" : "hidden"
                } bg-lightWhite items-center justify-between w-[100vw] text-lg flex-col h-[100vh] absolute top-0 right-0 mobile:py-[25vh]`}
              >
                <AiOutlineClose
                  size={24}
                  color="#383838"
                  onClick={(e) => {
                    e.preventDefault();
                    closeNav();
                  }}
                />
                <li
                  onClick={(e) => {
                    e.preventDefault();
                    history("/projects");
                  }}
                  className="cursor-pointer px-3 py-[4px] rounded-md hover:bg-white hoverTransition"
                >
                  Projects
                </li>
                <li
                  onClick={(e) => {
                    e.preventDefault();
                    history("/experience");
                  }}
                  className="cursor-pointer px-3 py-[4px] rounded-md hover:bg-white hoverTransition"
                >
                  Experience
                </li>
                <li
                  onClick={(e) => {
                    e.preventDefault();
                    history("/aboutus");
                  }}
                  className="cursor-pointer px-3 py-[4px] rounded-md hover:bg-white hoverTransition"
                >
                  About
                </li>
                <li
                  onClick={(e) => {
                    e.preventDefault();
                    history("/contactus");
                  }}
                  className="cursor-pointer px-3 py-[4px] rounded-md hover:bg-white hoverTransition"
                >
                  Contact
                </li>
                <a
                  href={pdf}
                  target="blank"
                  style={{ transition: "all 0.25s ease-in-out" }}
                  className="text-grey border px-4 py-[2.25px] rounded-md border-grey cursor-pointer hover:bg-grey hover:text-lightWhite"
                >
                  Download Resume
                </a>
                {/* <button
                  onClick={(e) => {
                    e.preventDefault();
                    window.open("https://www.buymeacoffee.com/anekantjain");
                  }}
                  className="btnHover text-lightWhite bg-grey px-4 py-1 rounded-md cursor-pointer"
                >
                  Buy me a Coffee ☕
                </button> */}
              </ul>
            </>
          ) : (
            <ul className="flex items-center justify-between w-[50vw] text-[15px] md:flex-row mobile:flex-col">
              <li
                onClick={(e) => {
                  e.preventDefault();
                  history("/projects");
                }}
                className="cursor-pointer px-3 py-[4px] rounded-md hover:bg-white hoverTransition"
              >
                Projects
              </li>
              <li
                onClick={(e) => {
                  e.preventDefault();
                  history("/experience");
                }}
                className="cursor-pointer px-3 py-[4px] rounded-md hover:bg-white hoverTransition"
              >
                Experience
              </li>
              <li
                onClick={(e) => {
                  e.preventDefault();
                  history("/aboutus");
                }}
                className="cursor-pointer px-3 py-[4px] rounded-md hover:bg-white hoverTransition"
              >
                About
              </li>
              <li
                onClick={(e) => {
                  e.preventDefault();
                  history("/contactus");
                }}
                className="cursor-pointer px-3 py-[4px] rounded-md hover:bg-white hoverTransition"
              >
                Contact
              </li>
              <a
                href={pdf}
                target="blank"
                style={{ transition: "all 0.25s ease-in-out" }}
                className="text-grey border px-4 py-[2.25px] rounded-md border-grey cursor-pointer hover:bg-grey hover:text-lightWhite"
              >
                Download Resume
              </a>
              {/* <button
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://www.buymeacoffee.com/anekantjain");
                }}
                className="btnHover text-lightWhite bg-grey px-4 py-1 rounded-md cursor-pointer"
              >
                Buy me a Coffee ☕
              </button> */}
            </ul>
          )}
        </div>
      </div>
      <div className="md:py-8 mobile:py-7"></div>
    </>
  );
};

export default Nav;
