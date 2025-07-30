import Box from "@/components/ui/Box";
import Image from "next/image";
import React from "react";

const QuizeImage = () => {
  return (
    <Box className="relative h-[550px] w-full">
      <Image src="/images/quize.png" fill alt="Quize" />
    </Box>
  );
};

export default QuizeImage;
