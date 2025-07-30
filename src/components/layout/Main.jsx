import React from "react";
import Hero from "../sections/Hero";
import CloudSoftware from "../sections/CloudSoftware";
import About from "../sections/About";
import Service from "../sections/services/Service";

const Main = () => {
  return (
    <main>
      <Hero />
      <CloudSoftware />
      <About />
      <Service />
    </main>
  );
};

export default Main;
