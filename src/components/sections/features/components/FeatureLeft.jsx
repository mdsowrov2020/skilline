import Image from "next/image";
import React from "react";

const FeatureLeft = () => {
  return (
    <div className="relative h-[500px] w-full">
      <Image src="/images/featureImg.png" alt="Feature" fill />
    </div>
  );
};

export default FeatureLeft;
