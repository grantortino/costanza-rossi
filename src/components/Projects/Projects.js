/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Arbeitspause from "./children/ArbeitsPause";
import FeministFormsOfLiving from "./children/FeministFormsOfLiving";
import PensarEnConversacion from "./children/PensarEnConversacion";
const Projects = () => {
  return (
    <div style={{ padding: 32 }}>
      <PensarEnConversacion />
      <div
        style={{
          width: "100%",
          height: "1vh",
          backgroundColor: "#786644",
          margin: "7vh 0vh",
        }}
      />
      <Arbeitspause />
      <div
        style={{
          width: "100%",
          height: "1vh",
          backgroundColor: "#786644",
          margin: "7vh 0vh",
        }}
      />
      <FeministFormsOfLiving />
    </div>
  );
};

export default Projects;
