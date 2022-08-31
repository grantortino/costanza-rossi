import React from "react";
import costanzaRossiDeS from "../../assets/title.svg";
import { getClassNames } from "../../styles/getClassNames";
import About from "../About/About";
import Projects from "../Projects/Projects";
import { Link } from "react-router-dom";

const MainPage = () => {
  const { body, spalteLinks, spalteMittel, spalteRechts, titleSvg, links } =
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
              }}>
              <Link to="/about" className={links}>
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
                    }}>
                    ABOUT
                  </p>
                </div>
              </Link>

              <Link to="/projects" className={links}>
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
                    }}>
                    PROJECTS
                  </p>
                </div>
              </Link>
            </div>
            <div
              style={{
                widht: "100%",
                height: "49vh",
                backgroundColor: "#fff",
                overflow: "scroll",
              }}>
              {/* ABOUT - Component */}
              <About />
              {/* PROJECTS - Component */}
              <Projects />
            </div>
          </div>
        </div>
        <div className={spalteRechts}></div>
      </div>
    </>
  );
};

export default MainPage;
