import React, { useState } from "react";
import { ClipboardCopyIcon, RefreshIcon } from "@heroicons/react/solid";

const Single = ({ state }) => {
  const { data } = state;

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  const handleClick = () => {
    setValue(data[getRandomInt(data.length)].details);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
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
      <div className="grid gap-2 md:grid-cols-2 grid-cols-1">
        <button
          type="button"
          onClick={handleClick}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <RefreshIcon className="w-5 h-5 text-gray-50 " aria-hidden="true" />
          <span className="ml-3"></span>
          Une autre excuse de merde
        </button>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <ClipboardCopyIcon
            className="w-5 h-5 text-gray-50 "
            aria-hidden="true"
          />
          <span className="ml-3"></span>
          Copier cette excuse de merde
        </button>
      </div>
    </div>
  );
};

export default Single;
