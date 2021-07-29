import React from "react";
import Layout from "../../components/Layout";

const Add = ({ isActive, setActive }) => {
  setActive(true);

  return (
    <Layout isActive={isActive}>
      <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-4xl md:text-5xl pb-4">
        <span className="block">Formulaire </span>
        <span className="block text-indigo-600 xl:inline">
          d'ajout d'excuse
        </span>
      </h1>
      <iframe
        title="Add"
        src="https://docs.google.com/forms/d/e/1FAIpQLSd2YvIklpKAaTMc2P25Y5YZMNl3OqIH1qeQn45541A8HWZrqA/viewform?embedded=true"
        width="100%"
        height="650"
        frameBorder="0"
      >
        <h2 className="text-indigo-500 text-2xl">Chargement...</h2>
      </iframe>
    </Layout>
  );
};

export default Add;
