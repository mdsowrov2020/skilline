import React from "react";
import Box from "../ui/Box";
import Heading from "../ui/Heading";
import Image from "next/image";
import Button from "../ui/Button";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Box className="w-[75%] mx-auto ">
        <Heading
          title="What is"
          highlightedText=" Skilline?"
          description="Skilline is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place."
          className="w-[73%]"
        />

        <div className="flex justify-between items-center gap-16 mt-16">
          <div className="relative h-[300px] w-full rounded-4xl">
            <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center">
              <h4 className="text-2xl text-white mb-3">FOR INSTRUCTORS</h4>
              <Button
                size="large"
                className="bg-transparent border border-white text-white hover:bg-sky-400/80 transition-all duration-300 hover:border-transparent"
              >
                Start a class today
              </Button>
            </div>
            <Image src="/images/instructor.png" alt="Instructor" fill />
          </div>
          <div className="relative h-[300px] w-full rounded-4xl">
            <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center">
              <h4 className="text-2xl text-white mb-3">FOR STUDENTS</h4>
              <Button
                size="large"
                className="bg-transparent border border-white text-white hover:bg-sky-400/80 transition-all duration-300 hover:border-transparent"
              >
                Enter access code
              </Button>
            </div>
            <Image src="/images/student.png" alt="Instructor" fill />
          </div>
        </div>
      </Box>
    </div>
  );
};

export default About;
