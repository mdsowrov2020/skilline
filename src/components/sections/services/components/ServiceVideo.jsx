import Image from "next/image";
import React from "react";

const ServiceVideo = () => {
  return (
    <div className="relative h-[400px] w-full cursor-pointer z-20">
      <div className="absolute -z-10 h-32 w-32 rounded-2xl bg-sky-400 -top-3.5 -left-3.5"></div>
      <div className="absolute -z-10 h-40 w-40 rounded-2xl bg-primary -bottom-3.5 -right-3.5"></div>
      <Image src="/images/classroom.png" alt="Service video" fill />
    </div>
  );
};

export default ServiceVideo;
