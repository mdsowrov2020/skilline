import React from "react";
import Hero from "../sections/Hero";
import CloudSoftware from "../sections/CloudSoftware";
import About from "../sections/About";
import Service from "../sections/services/Service";
import Features from "../sections/features/Features";
import Tools from "../sections/Tools/Tools";
import Quize from "../sections/quizes/Quize";

const Main = () => {
  return (
    <main>
      <Hero />
      <CloudSoftware />
      <About />
      <Service />
      <Features />
      <Tools />
      <Quize />
    </main>
  );
};

export default Main;
