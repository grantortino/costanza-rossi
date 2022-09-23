import React from "react";
import { getClassNames } from "../../styles/getClassNames";

const About = () => {
  const { links } = getClassNames();
  return (
    <div style={{ padding: 32 }}>
      <div style={{ marginBottom: 32 }}>
        {/* <p style={{ fontSize: "4vh", fontWeight: "Bold", margin: "0 auto" }}>
          Artist &nbsp; &nbsp; &nbsp;<span style={{ color: "#786644" }}>|</span>{" "}
          &nbsp; &nbsp; &nbsp; Architect &nbsp; &nbsp; &nbsp;{" "}
          <span style={{ color: "#786644" }}>|</span> &nbsp; &nbsp; &nbsp;
          Researcher
        </p> */}
        <div
          style={{
            border: "5px dotted #786644",
            padding: 16,
            width: "12.5vh",
          }}>
          {/* <p style={{ fontSize: "4vh", fontWeight: "Bold", margin: "0 auto" }}>
            Contact
          </p> */}
          {/* <p style={{ fontSize: "4vh", fontWeight: "Bold", margin: "0 auto" }}>
            Architect
          </p>
          <p style={{ fontSize: "4vh", fontWeight: "Bold", margin: "0 auto" }}>
            Researcher
          </p> */}
          <p style={{ fontSize: "2vh" }}>
            <a href="mailto:crossi@zelt.cl" className={links}>
              crossi@zelt.cl
            </a>
          </p>
        </div>
      </div>

      {/* <p style={{ fontSize: "2vh", fontWeight: "bold" }}>Studies</p>

      <div style={{ display: "flex" }}>
        <p style={{ fontSize: "2vh", marginRight: 17 }}>2020</p>
        <p style={{ fontSize: "2vh" }}>
          Master of Arts, Institute for Art in Context, University of Arts
          Berlin. Germany. “Feminist forms of living. An artistic research on
          the socialization of reproductive labor” Teacher: Claudia Hummel
        </p>
      </div>

      <div style={{ display: "flex" }}>
        <p style={{ fontSize: "2vh", marginRight: 17 }}>2012</p>
        <p style={{ fontSize: "2vh" }}>
          Architecture studies diploma, Diego Portales University. Santiago,
          Chile. “Space of reconciliation between the body and the earth”
          Teacher: Christian Emilfork
        </p>
      </div> */}

      <p style={{ fontSize: "2vh", fontWeight: "bold" }}>Group exhibitions</p>

      <div style={{ display: "flex" }}>
        <p style={{ fontSize: "2vh", marginRight: 17 }}>09.2022</p>
        <p style={{ fontSize: "2vh" }}>
          Transtopia. Chilean Conexión. Chilean Festival of Arts in Berlin, 5th
          Edition. Monopol, Berlin.{" "}
          <span style={{ fontStyle: "italic" }}>
            "pensar en conversación / thinking by talking"
          </span>
        </p>
      </div>

      <div style={{ display: "flex" }}>
        <p style={{ fontSize: "2vh", marginRight: 17 }}>03.2022</p>
        <p style={{ fontSize: "2vh" }}>
          Sensing the city - sense of the city. Exhibition in ORi künstlerische
          Bildmedien e.V. 2022. Berlin, Germany.{" "}
          <span style={{ fontStyle: "italic" }}>“Arbeitspause im Görli” </span>
        </p>
      </div>

      <div style={{ display: "flex" }}>
        <p style={{ fontSize: "2vh", marginRight: 17 }}>08.2021</p>
        <p style={{ fontSize: "2vh" }}>
          Exhibition Preview Rundgang. Masterworks „Art in Context“. Haus der
          Statistik. Berlin, Germany.{" "}
          <span style={{ fontStyle: "italic" }}>
            “Feminist forms of living / Excercise Timeline”
          </span>
        </p>
      </div>

      <div style={{ display: "flex" }}>
        <p style={{ fontSize: "2vh", marginRight: 17 }}>03.2018</p>
        <p style={{ fontSize: "2vh" }}>
          Exhibition Empty Pedestals, Removed Monuments. Gallerie OKK - Organ
          kritischer Kunst. Berlin, Germany.{" "}
          <span style={{ fontStyle: "italic" }}>
            "Medical history granite, pedestal."
          </span>
        </p>
      </div>

      <p style={{ fontSize: "2vh", fontWeight: "bold" }}>
        Talks and interviews
      </p>

      <div style={{ display: "flex" }}>
        <p style={{ fontSize: "2vh", marginRight: 17 }}>2021</p>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>
            <p style={{ fontSize: "2vh" }}>
              Teaching to Transgress Toolbox. Interview about Questioning the
              notion of neutrality.
            </p>
          </div>
          <div>
            <p style={{ fontSize: "2vh" }}>
              <a href="http://ttttoolbox.net/home.xhtml" className={links}>
                http://ttttoolbox.net/home.xhtml
              </a>
            </p>
          </div>
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <p style={{ fontSize: "2vh", marginRight: 17 }}>2020</p>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p style={{ fontSize: "2vh" }}>
            Maleza Podcast, feministisch-sudaca Aufklärungsmedium. Interview
            about Feminist living formats.
          </p>
          <p style={{ fontSize: "2vh" }}>
            <a
              href="https://open.spotify.com episode/
          6XRKU933falIrVb797tpsf?si=EwaA9sTVTOCXdybTd_8kBQ"
              className={links}>
              https://open.spotify.com episode/
              6XRKU933falIrVb797tpsf?si=EwaA9sTVTOCXdybTd_8kBQ
            </a>
          </p>
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <p style={{ fontSize: "2vh", marginRight: 17 }}>2020</p>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p style={{ fontSize: "2vh" }}>
            Hypermedia Magazine, latin american women in Berlin. Melisa Matzner:
            “Costanza Rossi: “Debemos sociabilizar el trabajo reproductivo”
          </p>
          <a
            className={links}
            style={{ fontSize: "2vh" }}
            href="https://www.hypermediamagazine.com/dosieres-hm/
|creadoras-latinoamericanas-en-berlin/costanza-rossi/">
            https://www.hypermediamagazine.com/dosieres-hm/
            creadoras-latinoamericanas-en-berlin/costanza-rossi/
          </a>
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <p style={{ fontSize: "2vh", marginRight: 17 }}>2020</p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}>
          <p style={{ fontSize: "2vh" }}>
            Searching feminist living formats. CONVERSAS #49 Haus der Statistik.
            Berlin, Germany.
          </p>
          <p style={{ fontSize: "2vh" }}>
            <a href="https://conversasberlin.hotglue.me/49" className={links}>
              https://conversasberlin.hotglue.me/49
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
