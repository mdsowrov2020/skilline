import React from "react";
import Button from "../ui/Button";
import Image from "next/image";
import Box from "../ui/Box";

const Hero = () => {
  return (
    <div className="relative w-full h-[120vh] bg-primary-light flex items-center overflow-hidden  ">
      <div className="container mx-auto   flex flex-col md:flex-row   justify-between overflow-hidden ">
        <Box className="w-full md:w-[50%] mt-[18%] text-center md:text-left">
          <h1 className="text-5xl font-bold text-blue mb-4 leading-18">
            <span className="text-primary">Studying</span> Online is now much
            easier
          </h1>
          <p className="text-base text-gray-dark w-[80%] mx-auto md:mx-0 md:w-[60%]  mb-8">
            Skilline is an interesting platform that will teach you in more an
            interactive way
          </p>

          <div className="flex flex-col md:flex-row items-center gap-5">
            <Button size="large" className="text-white">
              Join for free
            </Button>

            <div className="flex items-center gap-5 ">
              <Image
                src="/images/play.png"
                alt="Hero Image"
                height={50}
                width={50}
              />
              <span className="text-gray-dark">Watch how it works</span>
            </div>
          </div>
        </Box>
        <Box className="relative w-full md:w-[50%] h-[700px] mt-0 md:mt-24 px-4 md:px-0">
          <Image src="/images/hero.png" alt="Hero Image" fill />
        </Box>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 200"
        className="absolute left-0 bottom-0 w-full h-[120px] z-10"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="heroWave" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fff" stopOpacity="1" />
            <stop offset="100%" stopColor="#fff" stopOpacity="1" />
          </linearGradient>
        </defs>
        <path
          fill="url(#heroWave)"
          d="M0,0L120,32C240,64,480,128,720,133.3C960,139,1200,85,1320,58.7L1440,32L1440,200L0,200Z"
        />
      </svg>
    </div>
  );
};

export default Hero;
