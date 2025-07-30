import Link from "next/link";
import React from "react";

const AboutService = () => {
  return (
    <div className="text-center md:text-left">
      <h4 className="text-blue text-2xl font-semibold relative custom-before md:pr-40 leading-11">
        Everything you can do in a physical classroom,{" "}
        <span className="text-primary">you can do with Skilline</span>
      </h4>

      <p className="text-blue-gray my-4 mb-5 md:pr-40">
        Skilline’s school management software helps traditional and online
        schools manage scheduling, attendance, payments and virtual classrooms
        all in one secure cloud-based system.
      </p>

      <Link href="#" className="text-blue-gray underline underline-offset-2">
        Learn more
      </Link>
    </div>
  );
};

export default AboutService;
