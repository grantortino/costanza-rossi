import React from "react";
import { Element, Link } from "react-scroll";
import costanzaRossiDeS from "../../assets/title.svg";
import { getClassNames } from "../../styles/getClassNames";
import About from "../About/About";
import Projects from "../Projects/Projects";

const MainPage = () => {
  const { body, spalteLinks, spalteMittel, spalteRechts, titleSvg } =
    getClassNames();
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
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                alignContent: "center",
                marginTop: 32,
                // margin: "0 auto",
                // height: "5vh",
              }}
            >
              <Link to="firstInsideContainer" containerId="containerElement">
                <div>
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "7vh",
                      color: "#786644",
                      margin: "0 auto",
                      ":hover": {
                        color: "black",
                      },
                      cursor: "pointer",
                    }}
                  >
                    ABOUT
                  </p>
                </div>
              </Link>

              <Link to="secondInsideContainer" containerId="containerElement">
                <div>
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "7vh",
                      color: "#786644",
                      margin: "0 auto",
                      ":hover": {
                        color: "black",
                      },
                      cursor: "pointer",
                    }}
                  >
                    PROJECTS
                  </p>
                </div>
              </Link>
            </div>
            <div
              id="containerElement"
              style={{
                widht: "100%",
                height: "49vh",
                backgroundColor: "#fff",
                overflow: "scroll",
              }}
            >
              {/* ABOUT - Component */}
              <Element name="firstInsideContainer">
                <About />
              </Element>

              {/* PROJECTS - Component */}
              <Element name="secondInsideContainer">
                <Projects />
              </Element>
            </div>
          </div>
        </div>
        <div className={spalteRechts}></div>
      </div>
    </>
  );
};

export default MainPage;
