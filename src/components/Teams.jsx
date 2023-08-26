import React from "react";
import Slider from "./Slider";

const data = [
  {
    name: "Department 1",
    mentors: [
      { name: "Shubham", university: "Cambridge University" },
      { name: "Mentor 2", university: "University name" },
      { name: "Mentor 3", university: "University name" },
      { name: "Mentor 4", university: "University name" },
    ],
  },
  {
    name: "Department 2",
    mentors: [
      { name: "Shubham", university: "Cambridge University" },
      { name: "Mentor 2", university: "University name" },
      { name: "Mentor 3", university: "University name" },
      { name: "Mentor 4", university: "University name" },
    ],
  },
  {
    name: "Department 3",
    mentors: [
      { name: "Shubham", university: "Cambridge University" },
      { name: "Mentor 2", university: "University name" },
      { name: "Mentor 3", university: "University name" },
      { name: "Mentor 4", university: "University name" },
    ],
  },
];
const Teams = () => {
  return (
    <>
      <div className="w-4/5 text-center text-sm font-medium md:text-2xl lg:text-3xl mx-auto my-10">
        <h1 class="font-poppins font-semibold text-3xl md:text-4xl lg:text-5xl text-center bg-gradient-to-r from-purple-800 to-blue-300 bg-clip-text text-transparent">
          Meet Your Mentors
        </h1>
      </div>

      {data.map((item, index) => (
        <div key={index} className="text-center">
          <h2 className="text-3xl font-semibold bg-gradient-to-r from-purple-800 to-blue-300 bg-clip-text text-transparent">
            {item.name}
          </h2>
          <Slider data={item.mentors} />
        </div>
      ))}
    </>
  );
};

export default Teams;
