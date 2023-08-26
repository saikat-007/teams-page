import React from "react";
import "../Card.css";

const MentorCard = ({ name }) => {
  return (
    <div className="body">
      <div className="container">
        <div className="card">
          <div className="image">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt="Card"
            />
          </div>
          <div className="content">
            <h3 className="text-lg font-bold">{name}</h3>
            <p className="font-thin">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="bg-white px-6 my-2 py-2 rounded-lg shadow-md font-medium text-lg hover:scale-105 transform transition duration-300">
              <span className="bg-gradient-to-r from-purple-800 to-blue-300 bg-clip-text text-transparent">
                Messege him..
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
