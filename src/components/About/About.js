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
            border: "0.1px solid #786644",
            padding: 16,
            width: "22vh",
          }}>
          <p style={{ fontSize: "4vh", fontWeight: "Bold", margin: "0 auto" }}>
            Artist
          </p>
          <p style={{ fontSize: "4vh", fontWeight: "Bold", margin: "0 auto" }}>
            Architect
          </p>
          <p style={{ fontSize: "4vh", fontWeight: "Bold", margin: "0 auto" }}>
            Researcher
          </p>
          {/* <p style={{ fontSize: "2vh" }}>+49 176 39161024</p> */}
          <p style={{ fontSize: "2vh" }}>
            <a href="mailto:crossi@zelt.cl" className={links}>
              crossi@zelt.cl
            </a>
          </p>
        </div>
      </div>

      <p style={{ fontSize: "2vh", fontWeight: "bold" }}>Studies</p>

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
      </div>

      <p style={{ fontSize: "2vh", fontWeight: "bold" }}>Group exhibitions</p>

      <div style={{ display: "flex" }}>
        <p style={{ fontSize: "2vh", marginRight: 17 }}>09.2022</p>
        <p style={{ fontSize: "2vh" }}>
          Transtopia. Chilean Conexión. Chilean Festival of Arts in Berlin, 5th
          Edition. Monopol, Berlin.
        </p>
      </div>

      <div style={{ display: "flex" }}>
        <p style={{ fontSize: "2vh", marginRight: 17 }}>03.2022</p>
        <p style={{ fontSize: "2vh" }}>
          Sensing the city - sense of the city. Ausstellung bei ORi
          künstlerische Bildmedien e.V. 2022 Verschiedenen Künstler*innen, in
          der das Projekt “Arbeitspause im Görli” ausgestellt wurde
        </p>
      </div>

      <div style={{ display: "flex" }}>
        <p style={{ fontSize: "2vh", marginRight: 17 }}>08.2021</p>
        <p style={{ fontSize: "2vh" }}>
          Exhibition Preview Rundgang. Masterworks „Art in Context“. Haus der
          Statistik. Berlin, Germany. https://preview.kunstimkontext.nete
        </p>
      </div>

      <div style={{ display: "flex" }}>
        <p style={{ fontSize: "2vh", marginRight: 17 }}>2018</p>
        <p style={{ fontSize: "2vh" }}>
          Exhibition Empty Pedestals, Removed Monuments. Gallerie OKK - Organ
          kritischer Kunst. Berlin, Germany. Installation: Medical history
          granite, pedestal.
        </p>
      </div>

      <p style={{ fontSize: "2vh", fontWeight: "bold" }}>
        Talks and interviews
      </p>

      <div style={{ display: "flex" }}>
        <p style={{ fontSize: "2vh", marginRight: 17 }}>2021</p>
        <p style={{ fontSize: "2vh" }}>
          Teaching to Transgress Toolbox. Interview about Questioning the notion
          of neutrality. http://ttttoolbox.net/home.xhtml.
        </p>
      </div>

      <div style={{ display: "flex" }}>
        <p style={{ fontSize: "2vh", marginRight: 17 }}>2020</p>
        <p style={{ fontSize: "2vh" }}>
          Maleza Podcast, feministisch-sudaca Aufklärungsmedium. Interview about
          Feminist living formats. https://open.spotify.com episode/
          6XRKU933falIrVb797tpsf?si=EwaA9sTVTOCXdybTd_8kBQ
        </p>
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
        <p style={{ fontSize: "2vh" }}>
          Searching feminist living formats. CONVERSAS #49 Haus der Statistik.
          Berlin, Germany. https://conversasberlin.hotglue.me/49
        </p>
      </div>
    </div>
  );
};

export default About;
