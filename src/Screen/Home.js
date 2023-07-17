import React from "react";

import Nav from "../Components/Nav";
import Main from "../Components/Main";
import Project from "./Project";
import ViewOneProject from "./ViewOneProject";
import Footer from "../Components/Footer";

import { Routes, Route } from "react-router";
import AboutUs from "./AboutUs";
import { ContactUs } from "./ContactUs";
import Experience from "./Experience";

const Home = ({ animations }) => {
  return (
    <div className="h-[200%] bg-teal-100	">
      <Nav />
      <Routes className="w-[100vw]">
        <Route path="/" element={<Main animations={animations} />} />
        <Route path="/projects" element={<Project animations={animations} />} />
        <Route
          path="/viewone/:id"
          element={<ViewOneProject animations={animations} />}
        />
        <Route path="/aboutus" element={<AboutUs animations={animations} />} />
        <Route
          path="/contactus"
          element={<ContactUs animations={animations} />}
        />
        <Route
          path="/experience"
          element={<Experience animations={animations} />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default Home;
