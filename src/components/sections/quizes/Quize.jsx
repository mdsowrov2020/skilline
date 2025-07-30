import React from "react";
import QuizeImage from "./components/QuizeImage";
import Quizeinfo from "./components/Quizeinfo";
import Box from "@/components/ui/Box";

const Quize = () => {
  return (
    <section className="container mx-auto mt-24 px-10 md:px-0">
      <Box className="flex flex-col md:flex-row items-center justify-between gap-14">
        <div className="w-full md:w-[40%]">
          <QuizeImage />
        </div>
        <div className="w-full md:w-[45%]">
          <Quizeinfo />
        </div>
      </Box>
    </section>
  );
};

export default Quize;
