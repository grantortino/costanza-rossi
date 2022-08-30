import React from "react";
import proTwo from "../../../assets/pro-two.png";
import { getClassNames } from "../../../styles/getClassNames";

const Arbeitspause = () => {
  const { links } = getClassNames();
  return (
    <>
      <div style={{ margin: "0vh 0vh 1.7vh 0vh" }}>
        <p style={{ fontSize: "4vh", fontWeight: "Bold", margin: "0 auto" }}>
          Arbeitspause at Görlitzerpark
        </p>
        <p
          style={{
            fontSize: "3vh",
            fontWeight: "Bold",
            // margin: "0 auto",
            fontStyle: "italic",
          }}>
          Series of events to temporarily and collectively appropriate the Park
          as an open studio
        </p>
      </div>

      <div style={{ display: "flex" }}>
        <p style={{ fontSize: "2vh", marginRight: 11, fontWeight: "Bold" }}>
          Date
        </p>
        <p style={{ fontSize: "2vh" }}>08.-10. 2021</p>
      </div>
      <div style={{ display: "flex" }}>
        <p style={{ fontSize: "2vh", marginRight: 11, fontWeight: "Bold" }}>
          Place
        </p>
        <p style={{ fontSize: "2vh" }}>Görlitzerpark Berlin, Germany.</p>
      </div>
      <div style={{ display: "flex" }}>
        <p style={{ fontSize: "2vh", marginRight: 11, fontWeight: "Bold" }}>
          Group
        </p>
        <p style={{ fontSize: "2vh" }}>
          Marta Stanisława Sala, Johanna Reichhart, Marcos García Pérez,
          Katarzyna Sala, Kin Man Cheong, Francis Kamprath
        </p>
      </div>
      <div style={{ display: "flex" }}>
        <p style={{ fontSize: "2vh", marginRight: 11, fontWeight: "Bold" }}>
          Web
        </p>
        <p style={{ fontSize: "2vh" }}>
          <a href="https://arbeitspause.blogspot.com" className={links}>
            arbeitspause.blogspot.com
          </a>
        </p>
      </div>
      <p style={{ fontSize: "2vh" }}>
        „Work break in the Görli“ or „Arbeitspause im Görli” is a series of
        events with artists and invited guests. In five artistic actions,
        so-called „Arbeitspausen“, different formats of collaborative work are
        developed as a method. We bring in our own tools to temporarily and
        collectively appropriate the Görlitzer Park as an open studio.
      </p>
      <div>
        <img
          alt="project-two-photo"
          src={proTwo}
          style={{ width: "100%", marginTop: 16 }}
        />
      </div>
    </>
  );
};

export default Arbeitspause;
