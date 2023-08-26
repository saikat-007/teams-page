import React from "react";


const Card = ({name,uni}) => {
  return (
    <div>
      <div className="w-56 mx-auto md:w-60 lg:w-70 bg-white font-semibold text-center rounded-3xl border shadow-lg p-6 max-w-xs bg-gradient-to-b from-blue-200 via-blue-400 to-purple-500">
        <img
          className="mb-3 w-24 h-24 rounded-full shadow-lg mx-auto"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          alt="product designer"
        />
        <h1 className="text-lg text-black"></h1>
        <h3 className="text-lg text-white">{name}</h3>
        <p className="text-sm text-white font-thin">{uni}</p>
        <div className="flex justify-evenly m-4">
          <a
            href=""
            className="hover:text-gray-100 hover:bg-teal-900 rounded-full text-white ease-out"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>

          <a
            href=""
            className="hover:text-gray-100 hover:bg-teal-900 rounded-full text-white"
          >
            <ion-icon name="mail-outline"></ion-icon>
          </a>

          <a
            href=""
            className="hover:text-gray-100 hover:bg-teal-900 rounded-full text-white"
          >
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
