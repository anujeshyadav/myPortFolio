import React from "react";
import SocialMedia from "./SocialMedia";
import img from "./../Data/anujlogo.png";
import { useNavigate } from "react-router";

const Footer = () => {
  const history = useNavigate();
  return (
    <div className="bg-transparent border-t text-grey backdrop-blur-md md:px-[8vw] mobile:px-[4vw] mobile:py-5 md:py-2 flex md:flex-row mobile:flex-col md:justify-between mobile:justify-center items-center">
      <img
        src={img}
        className="md:w-[8vw] mobile:w-[25vw] cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          history("/");
        }}
        alt="sign"
      />
      <SocialMedia color="grey" />
    </div>
  );
};

export default Footer;
