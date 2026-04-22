import React from "react";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Experience from "@/pages/Experience";
import Services from "@/pages/Services";
import Projects from "@/pages/Projects";
import Achievements from "@/pages/Achievements";
import Contact from "@/pages/Contact";
import SectionDivider from "@/components/SectionDivider";

const page = () => {
  return (
    <div className="pt-24">
      <Home />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Achievements />
      <SectionDivider />
      <Contact />
    </div>
  );
};

export default page;