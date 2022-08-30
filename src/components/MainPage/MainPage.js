import React from "react";
import { getClassNames } from "../../styles/getClassNames";
import costanzaRossiDeS from "../../assets/title.svg";
import artArchRes from "../../assets/art-arc-res.svg";

const MainPage = () => {
  let {
    body,
    spalteLinks,
    spalteMittel,
    spalteRechts,
    titleSvg,
    navContainer,
  } = getClassNames();
  return (
    <>
      <div className={body}>
        <div className={spalteLinks}></div>
        <div className={spalteMittel}>
          <div>
            <img
              className={titleSvg}
              alt="costanza-rossi-de-s"
              src={costanzaRossiDeS}
            />
            {/* <img
              className={titleSvg}
              alt="artist-architect-research"
              src={artArchRes}
            /> */}
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                alignContent: "center",
                marginTop: 32,
                // margin: "0 auto",
                // height: "5vh",
              }}>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "7vh",
                  color: "#786644",
                  margin: "0 auto",
                }}>
                ABOUT
              </p>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "7vh",
                  color: "#786644",
                  margin: "0 auto",
                }}>
                PROJECTS
              </p>
            </div>
            <div
              style={{
                widht: "100%",
                height: "50vh",
                backgroundColor: "#fff",
                overflow: "scroll",
              }}>
              <div>
                {/* ABOUT - Component */}
                <p style={{ fontSize: "2vh" }}>Studies</p>
                <div style={{ display: "flex" }}>
                  <p style={{ fontSize: "2vh", marginRight: 17 }}>2020</p>
                  <p style={{ fontSize: "2vh" }}>
                    Master of Arts, Institute for Art in Context, University of
                    Arts Berlin. Germany. “Feminist forms of living. An artistic
                    research on the socialization of reproductive labor”
                    Teacher: Claudia Hummel
                  </p>
                </div>
                <div style={{ display: "flex" }}>
                  <p style={{ fontSize: "2vh", marginRight: 17 }}>2012</p>
                  <p style={{ fontSize: "2vh" }}>
                    Architecture studies diploma, Diego Portales University.
                    Santiago, Chile. “Space of reconciliation between the body
                    and the earth” Teacher: Christian Emilfork
                  </p>
                </div>
                <p style={{ fontSize: "2vh" }}>Group exhibitions</p>
                <div style={{ display: "flex" }}>
                  <p style={{ fontSize: "2vh", marginRight: 17 }}>09.2022</p>
                  <p style={{ fontSize: "2vh" }}>
                    Transtopia. Chilean Conexión. Chilean Festival of Arts in
                    Berlin, 5th Edition. Monopol, Berlin.
                  </p>
                </div>
                <div style={{ display: "flex" }}>
                  <p style={{ fontSize: "2vh", marginRight: 17 }}>03.2022</p>
                  <p style={{ fontSize: "2vh" }}>
                    Sensing the city - sense of the city. Ausstellung bei ORi
                    künstlerische Bildmedien e.V. 2022 Verschiedenen
                    Künstler*innen, in der das Projekt “Arbeitspause im Görli”
                    ausgestellt wurde
                  </p>
                </div>
                <div style={{ display: "flex" }}>
                  <p style={{ fontSize: "2vh", marginRight: 17 }}>08.2021</p>
                  <p style={{ fontSize: "2vh" }}>
                    Exhibition Preview Rundgang. Masterworks „Art in Context“.
                    Haus der Statistik. Berlin, Germany.
                    https://preview.kunstimkontext.nete
                  </p>
                </div>
                <div style={{ display: "flex" }}>
                  <p style={{ fontSize: "2vh", marginRight: 17 }}>2018</p>
                  <p style={{ fontSize: "2vh" }}>
                    Exhibition Empty Pedestals, Removed Monuments. Gallerie OKK
                    - Organ kritischer Kunst. Berlin, Germany. Installation:
                    Medical history granite, pedestal.
                  </p>
                </div>
              </div>
              {/* PROJECTS - Component */}
            </div>
          </div>
        </div>
        <div className={spalteRechts}></div>
      </div>
    </>
  );
};

export default MainPage;
