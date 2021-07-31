import React, { useState, useEffect } from "react";
import {
  ClipboardCopyIcon,
  RefreshIcon,
  ThumbUpIcon,
  ThumbDownIcon,
} from "@heroicons/react/solid";
import firebase from "../firebase/firebase";
import {
  displayUpVote,
  displayDownVote,
  displayDefault,
  displayCopy,
} from "../helpers/Toastify";

const Single = ({ state }) => {
  const { data } = state;

  const [oneQuote, setOneQuote] = useState({});

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };
  let nbRandom = getRandomInt(data.length);

  const [value, setValue] = useState(data[nbRandom].details);
  const [id, setId] = useState(data[nbRandom].id);

  useEffect(() => {
    getDocument(id);
  }, [id]);

  const getDocument = async (id) => {
    // [START firestore_data_get_as_map]
    const quoteRef = firebase.db
      .collection(process.env.REACT_APP_COLLECTION)
      .doc(id);
    const doc = await quoteRef.get();

    if (!doc.exists) {
      console.warn("No such document!");
    } else {
      setOneQuote(doc.data());
    }
    // [END firestore_data_get_as_map]
  };

  const increment = (value, signed) => {
    if (!oneQuote.votes) {
      oneQuote.votes = { up: 0, down: 0 };
    }

    const temp = { ...oneQuote.votes };
    temp[signed] += value;
    return { votes: temp };
  };

  const upVote = () => {
    getDocument(id);
    firebase.db
      .collection(process.env.REACT_APP_COLLECTION)
      .doc(id)
      .update(increment(1, "up"))
      .then(() => {
        console.info("Voted up!");
      })
      .catch((error) => {
        console.warn("Something went wrong!" + error);
      });
    displayUpVote();
  };

  const downVote = () => {
    getDocument(id);
    firebase.db
      .collection(process.env.REACT_APP_COLLECTION)
      .doc(id)
      .update(increment(1, "down"))
      .then(() => {
        console.info("Voted up!");
      })
      .catch((error) => {
        console.warn("Something went wrong!" + error);
      });
    displayDownVote();
  };

  const handleVote = (vote) => {
    switch (vote) {
      case "up":
        upVote();
        break;
      case "down":
        downVote();
        break;
      default:
        displayDefault();
        break;
    }
  };

  const handleClick = () => {
    let nbRandom = getRandomInt(data.length);
    setValue(data[nbRandom].details);
    setId(data[nbRandom].id);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    displayCopy();
  };

  console.log(oneQuote);

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="grid grid-cols-3 grid-rows-2">
        <div className="w-full mx-auto rounded-l-lg bg-white shadow-lg px-5 pt-5 text-gray-800  col-span-2 row-span-2">
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
          onClick={() => handleVote("up")}
          className="inline-flex items-center px-2.5 py-1.5 border-2 border-indigo-500 border-opacity-25 shadow-md text-xs font-medium rounded-tr-lg text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none "
        >
          <ThumbUpIcon
            className="w-5 h-5 text-indigo-700  "
            aria-hidden="true"
          />
          <span className="ml-3"></span>
          Elle me plaît celle-là
        </button>
        <button
          type="button"
          onClick={() => handleVote("down")}
          className="inline-flex items-center px-2.5 py-1.5 border-2 border-indigo-500 border-opacity-25 shadow-md text-xs font-medium rounded-br-lg text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none "
        >
          <ThumbDownIcon
            className="w-5 h-5 text-indigo-700  "
            aria-hidden="true"
          />
          <span className="ml-3"></span>
          Ah non, pas celle-là
        </button>
      </div>
      <div className="grid gap-2 md:grid-cols-2 grid-cols-1 mt-8">
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
