import React from "react";
import MentorCard from "./MentorCard";

const Mentors = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-4/5 text-center text-sm font-medium md:text-2xl lg:text-3xl mx-auto my-10">
        <h1 class="font-poppins font-semibold text-3xl md:text-4xl lg:text-5xl text-center bg-gradient-to-r from-purple-800 to-blue-300 bg-clip-text text-transparent">
          Mentors and Advisor
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        <MentorCard name={"Dr Omkar"}/>
        <MentorCard name={"Vivek Dwivedi"}/>
        <MentorCard name={"Akhil Tripathi"}/>
      </div>
    </div>
  );
};

export default Mentors;
