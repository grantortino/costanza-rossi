/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import proOne from "../../../assets/pro-one.png";

const PensarEnConversacion = () => {
  return (
    <>
      <div style={{ margin: "0vh 0vh 1.7vh 0vh" }}>
        <p style={{ fontSize: "4vh", fontWeight: "Bold", margin: "0 auto" }}>
          pensar en conversación / thinking by talking
        </p>
      </div>

      <div style={{ display: "flex" }}>
        <p style={{ fontSize: "2vh", marginRight: 11, fontWeight: "Bold" }}>
          Date
        </p>
        <p style={{ fontSize: "2vh" }}>August 2022</p>
      </div>
      <div style={{ display: "flex" }}>
        <p style={{ fontSize: "2vh", marginRight: 11, fontWeight: "Bold" }}>
          Format
        </p>
        <p style={{ fontSize: "2vh" }}>Video, 5 minutes</p>
      </div>
      <div style={{ display: "flex" }}>
        <p style={{ fontSize: "2vh", marginRight: 11, fontWeight: "Bold" }}>
          Team
        </p>
        <p style={{ fontSize: "2vh" }}>
          Juana Díaz, Carolina Jacob, Paloma Aguirre, Sofía Dumay, Domínica
          Ortiz, Samantha Grob, Javiera Zarzar, Adriana Gahona
        </p>
      </div>
      <div style={{ display: "flex" }}>
        <p style={{ fontSize: "2vh", marginRight: 11, fontWeight: "Bold" }}>
          Authors
        </p>
        <p style={{ fontSize: "2vh" }}>
          Paul B. Preciado, Dolores Despentes, Silvia Federici, Hélène Frichot,
          Dolores Hayden, bell hooks, Lina Meruane, Liy Ogbu, Rita Segato,
          Gayatri Spivak and others.
        </p>
      </div>
      <p style={{ fontSize: "2vh" }}>
        Sociologist Rita Segato (Argentina, 1951) points out that we need to
        understand conversation as an exercise with greater power, as opposed to
        individual, isolated reflection. This weekly conversation is based on
        this idea.
      </p>
      <p style={{ fontSize: "2vh" }}>
        This exercise was initiated in 2020 during the creative artistic
        research on gender studies and architecture. Due to the particular
        situation of pandemic I feel the need to share and exchange material and
        reflections with other women. I decided to connect Spanish-speaking, my
        mother tongue, women who were interested in the topic of my research. We
        reviewed artists, actresses, writers, philosophers, psychologists,
        sociologists, anthropologists, etc. in different formats such as texts,
        podcasts and videos. This led us to open the limits of what is
        conventionally associated with the theory of architecture as well as the
        formats conventionally used to incorporate new knowledge to the field.
        In order to consciously include in our discourse an intersectional and
        decolonial perspective. Two years after the first conversation sessions
        I decided to make a video that would convey some of the topics, ideas,
        key concepts of the intersection between gender studies and
        architecture.
      </p>
      <div>
        <img
          alt="project-one-photo"
          src={proOne}
          style={{ width: "100%", marginTop: 16 }}
        />
      </div>
    </>
  );
};

export default PensarEnConversacion;
