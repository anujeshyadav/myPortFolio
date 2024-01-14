import React from "react";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
  AiFillYoutube,
  AiFillMail,
  AiFillFacebook,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";

const SocialMedia = ({ color }) => {
  return (
    <div className="flex items-center mt-2">
      <AiFillLinkedin
        size={window.innerWidth < 550 ? 38 : 45}
        onClick={(e) => {
          e.preventDefault();
          window.open("https://www.instagram.com/anujeshy/");
        }}
        className={`md:mr-4 mobile:mr-3 bg-white md:p-2 mobile:p-1.5 rounded-full cursor-pointer ${
          color ? "greyHover" : "oceanHover"
        }`}
        color={color ? "#0A66C2" : "#0A66C2"}
      />
      <AiFillGithub
        size={window.innerWidth < 550 ? 38 : 45}
        onClick={(e) => {
          e.preventDefault();
          window.open("https://github.com/anujeshyadav");
        }}
        className={`md:mr-4 mobile:mr-3 bg-white md:p-2 mobile:p-1.5 rounded-full cursor-pointer ${
          color ? "greyHover" : "oceanHover"
        }`}
        color={color ? "#1f2328" : "#1f2328"}
      />
      <RiWhatsappFill
        size={window.innerWidth < 550 ? 38 : 45}
        onClick={(e) => {
          e.preventDefault();
          window.open(
            "https://wa.me/917000420819?text=Hello,%20this%20is%20Anujesh%20yadav.%0AThank%20You%20for%20contacting%20me.%0AShare%20your%20details%20or%20information.%0A"
          );
        }}
        className={`md:mr-4 mobile:mr-3 bg-white md:p-2 mobile:p-1.5 rounded-full cursor-pointer ${
          color ? "greyHover" : "oceanHover"
        }`}
        color={color ? "#42c051" : "#42c051"}
      />
      <AiFillInstagram
        size={window.innerWidth < 550 ? 38 : 45}
        onClick={(e) => {
          e.preventDefault();
          window.open("https://www.instagram.com/anujeshy");
        }}
        className={`md:mr-4 mobile:mr-3 bg-white md:p-2 mobile:p-1.5 rounded-full cursor-pointer ${
          color ? "greyHover" : "oceanHover"
        }`}
        color={color ? "#fa7e1e" : "#fa7e1e"}
      />
      {/* for you tube */}
      {/* <AiFillYoutube
        size={window.innerWidth < 550 ? 38 : 45}
        onClick={(e) => {
          e.preventDefault();
          window.open("https://youtube.com/@ajlearning8494");
        }}
        className={`md:mr-4 mobile:mr-3 bg-white md:p-2 mobile:p-1.5 rounded-full cursor-pointer ${
          color ? "greyHover" : "oceanHover"
        }`}
        color={color ? "#383838" : "#65cfc4"}
      /> */}
      <AiFillTwitterSquare
        size={window.innerWidth < 550 ? 38 : 45}
        onClick={(e) => {
          e.preventDefault();
          window.open("https://twitter.com/Anujesh73091619");
        }}
        className={`md:mr-4 mobile:mr-3 bg-white md:p-2 mobile:p-1.5 rounded-full cursor-pointer ${
          color ? "greyHover" : "oceanHover"
        }`}
        color={color ? "#00acee" : "#00acee"}
      />
      {/* <AiFillMail
        size={window.innerWidth < 550 ? 38 : 45}
        onClick={(e) => {
          e.preventDefault();
          window.open("mailto:anekantjainsagar@gmail.com");
        }}
        className={`md:mr-4 mobile:mr-3 bg-white md:p-2 mobile:p-1.5 rounded-full cursor-pointer ${
          color ? "greyHover" : "oceanHover"
        }`}
        color={color ? "#383838" : "#65cfc4"}
      /> */}
      <AiFillFacebook
        size={window.innerWidth < 550 ? 38 : 45}
        onClick={(e) => {
          e.preventDefault();
          window.open("https://www.facebook.com/anujesh.yadav/");
        }}
        className={`md:mr-4 mobile:mr-3 bg-white md:p-2 mobile:p-1.5 rounded-full cursor-pointer ${
          color ? "greyHover" : "oceanHover"
        }`}
        color={color ? "#3b5998" : "#3b5998"}
      />
    </div>
  );
};

export default SocialMedia;
