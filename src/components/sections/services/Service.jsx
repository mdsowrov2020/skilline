import Box from "@/components/ui/Box";
import React from "react";
import AboutService from "./components/AboutService";
import ServiceVideo from "./components/ServiceVideo";

const Service = () => {
  return (
    <div className="container mx-auto  py-8 mt-28 px-10 md:px-0">
      <Box className="flex flex-col md:flex-row items-center justify-between gap-20">
        <div className="w-full md:w-1/2">
          <AboutService />
        </div>

        <div className="w-full md:w-1/2">
          <ServiceVideo />
        </div>
      </Box>
    </div>
  );
};

export default Service;
