import React, { useState, useEffect } from "react";
import firebase from "../../firebase/firebase";
import Layout from "../../components/Layout";
import Loader from "../../components/Loader";
import AllCard from "../../components/AllCard";

const DashBoard = () => {
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
          if (quote.isValid) {
            data.push(quote);
          }
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

  console.log(state);

  return (
    <Layout>
      <h1 className="text-3xl pb-8 font-medium text-gray-500">Dashboard</h1>
      {!load ? <Loader /> : <AllCard data={state.data} />}
    </Layout>
  );
};

export default DashBoard;
