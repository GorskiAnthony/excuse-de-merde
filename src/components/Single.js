import React, { useState } from "react";

const Single = ({ state }) => {
  const { data } = state;

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  const handleClick = () => {
    setValue(data[getRandomInt(data.length)].details);
  };

  const [value, setValue] = useState(data[getRandomInt(data.length)].details);

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 text-gray-800 mb-10">
        <div className="w-full mb-10">
          <div className="text-3xl text-indigo-500 text-left leading-tight h-3">
            “
          </div>
          <p className="text-lg text-gray-600 text-center px-5">{value}</p>
          <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
            ”
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={handleClick}
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Une autre excuse de merde
      </button>
    </div>
  );
};

export default Single;
