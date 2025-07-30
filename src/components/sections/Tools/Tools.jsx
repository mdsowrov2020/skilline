import Box from "@/components/ui/Box";
import React from "react";
import ToolsInfo from "./components/ToolsInfo";
import ToolsImage from "./components/ToolsImage";

const Tools = () => {
  return (
    <section className="container mx-auto mt-24 px-10 md:px-0">
      <Box className="flex flex-col md:flex-row items-center justify-between gap-14">
        <div className="w-full md:w-1/2">
          <ToolsInfo />
        </div>
        <div className="w-full md:w-1/2">
          <ToolsImage />
        </div>
      </Box>
    </section>
  );
};

export default Tools;
