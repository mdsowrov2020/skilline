import Image from "next/image";
import React from "react";

const FeatureList = () => {
  return (
    <ul className="flex flex-col gap-6 mt-8">
      <li className="flex items-center gap-6 ">
        <div
          className="relative h-[40px] w-[40px] rounded-full  flex-shrink-0"
          style={{ boxShadow: "-1px 10px 50px -9px rgba(0,0,0,0.53)" }}
        >
          <Image src="/images/gridIcon.png" alt="icon" fill className="p-3" />
        </div>
        <p className="w-[calc(100% - 40px)] text-blue-gray leading-7">
          Teachers don’t get lost in the grid view and have a dedicated Podium
          space.
        </p>
      </li>
      <li className="flex items-center gap-6 ">
        <div
          className="relative h-[40px] w-[40px] rounded-full  flex-shrink-0"
          style={{ boxShadow: "-1px 10px 50px -9px rgba(0,0,0,0.53)" }}
        >
          <Image src="/images/squareIcon.png" alt="icon" fill className="p-3" />
        </div>
        <p className="w-[calc(100% - 40px)] text-blue-gray leading-7">
          TA’s and presenters can be moved to the front of the class.
        </p>
      </li>
      <li className="flex items-center gap-6 ">
        <div
          className="relative h-[40px] w-[40px] rounded-full  flex-shrink-0"
          style={{ boxShadow: "-1px 10px 50px -9px rgba(0,0,0,0.53)" }}
        >
          <Image
            src="/images/userNewIcon.png"
            alt="icon"
            fill
            className="p-3"
          />
        </div>
        <p className="w-[calc(100% - 40px)] text-blue-gray leading-7">
          Teachers can easily see all students and class data at one time.
        </p>
      </li>
    </ul>
  );
};

export default FeatureList;
