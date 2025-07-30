import Box from "@/components/ui/Box";
import Image from "next/image";
import React from "react";

const ToolsImage = () => {
  return (
    <Box className="relative h-[550px] w-full">
      <Image src="/images/tools.png" fill alt="Tools" />
    </Box>
  );
};

export default ToolsImage;
