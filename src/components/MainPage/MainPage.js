import React from "react";
import { getClassNames } from "../../styles/getClassNames";
import costanzaRossiDeS from "../../assets/title.svg";
import artArchRes from "../../assets/art-arc-res.svg";
import About from "../About/About";

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
              {/* ABOUT - Component */}
              <About />
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
