import Image from "next/image";
import React from "react";

const Card = ({ icon, title, description }) => {
  return (
    <div className="rounded-2xl shadow-2xl/10 pt-4 px-10 pb-10   hover:shadow-xl transition-shadow duration-300 text-center">
      <div className="relative h-[80px] w-[80px]  transform -translate-y-16 mx-auto">
        <Image src={icon} alt={title} fill className="object-contain" />
      </div>
      <h3 className="text-2xl font-light mt-2  text-blue">{title}</h3>
      <p className="text-sm text-blue-gray mt-5 px-4 leading-7">
        {description}
      </p>
    </div>
  );
};

export default Card;
