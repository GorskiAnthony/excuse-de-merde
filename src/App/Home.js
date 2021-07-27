import React, { useState, useEffect } from "react";
import firebase from "../firebase/firebase";
import Single from "../components/Single";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const App = () => {
  /*
   i use useState to create a state variable that will be used in the render function
  */
  const [state, setState] = useState([]);
  const [load, setLoad] = useState(false);

  // update the state variable when the user clicks the button
  const updateData = () => {
    // firebase get all the data
    firebase.db
      .collection(process.env.REACT_APP_COLLECTION)
      .get()
      .then((snapshot) => {
        let data = [];
        snapshot.forEach((doc) => {
          let quote = Object.assign({ id: doc.id }, doc.data());
          data.push(quote);
        });
        setState({
          data,
        });
        setLoad(true);
      })
      .catch((err) => {
        console.error("Une erreur s'est produite : ", err);
      });
  };

  useEffect(() => {
    updateData();
  }, []);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="max-w-3xl mx-auto pt-16">
          <header>
            <h1 className="text-center text-5xl font-bold text-gray-800">
              Excuse de merde
            </h1>
            <p className="text-center text-xl pt-2 text-gray-800">
              Une excuse de merde pour tout le monde.
            </p>
          </header>
          <div className="flex justify-center items-center pt-24">
            {!load ? <Loader /> : <Single state={state} />}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;