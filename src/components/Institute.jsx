import React from "react";
const UniversityCard = ({ name }) => (
  <div className="bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 shadow-lg">
    <div className="p-4 text-white">{name}</div>
  </div>
);

const universities = [
  "Cambridge University",
  "Harvard University",
  "University of California",
  "University of Edinberg",
  "University of Illinois",
  "Michigan University",
  "John Hopkins University",
  "Eth Zurich University",
  "Max Plank",
  "Hunboldt University",
];

const Institute = () => {
  return (
    <div className="w-4/5 mx-auto text-center my-24">
      <h1 className="font-poppins font-semibold text-3xl md:text-4xl lg:text-5xl text-center bg-gradient-to-r from-blue-500 to-purple-900 bg-clip-text text-transparent">
        Learn from the Scientist , Scholars from the Top Institutes of the World
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {universities.map((university, index) => (
          <UniversityCard key={index} name={university} />
        ))}
      </div>
    </div>
  );
};

export default Institute;
