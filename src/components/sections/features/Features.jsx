import Box from "@/components/ui/Box";
import React from "react";
import FeatureLeft from "./components/FeatureLeft";
import FeatureContents from "./components/FeatureContents";
import Heading from "@/components/ui/Heading";

const Features = () => {
  return (
    <div className="container mx-auto mt-28 px-10 md:px-0 py-16">
      <Heading
        title="Our"
        highlightedText="Features"
        description="This very extraordinary feature, can make learning activities more efficient"
      />
      <Box className="flex flex-col md:flex-row items-center justify-between gap-20 mt-32">
        <div className="w-full md:w-[65%]">
          <FeatureLeft />
        </div>
        <div className="w-full md:w-[35%]">
          <FeatureContents />
        </div>
      </Box>
    </div>
  );
};

export default Features;
