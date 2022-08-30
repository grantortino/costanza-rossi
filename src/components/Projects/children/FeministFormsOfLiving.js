/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import proThreeOne from "../../../assets/pro-three-one.png";
import proThreeTwo from "../../../assets/pro-three-two.png";

const FeministFormsOfLiving = () => {
  //   const { links } = getClassNames();
  return (
    <>
      <div style={{ margin: "0vh 0vh 1.7vh 0vh" }}>
        <p style={{ fontSize: "4vh", fontWeight: "Bold", margin: "0 auto" }}>
          Feminist forms of living
        </p>
        <p
          style={{
            fontSize: "3vh",
            fontWeight: "Bold",
            // margin: "0 auto",
            fontStyle: "italic",
          }}>
          An artistic research on the socialization of reproductive labor
        </p>
      </div>

      <div style={{ display: "flex" }}>
        <p style={{ fontSize: "2vh", marginRight: 11, fontWeight: "Bold" }}>
          Date
        </p>
        <p style={{ fontSize: "2vh" }}>November 2020</p>
      </div>
      <div style={{ display: "flex" }}>
        <p style={{ fontSize: "2vh", marginRight: 11, fontWeight: "Bold" }}>
          Context
        </p>
        <p style={{ fontSize: "2vh" }}>
          Master work. Universität der Künste Berlin Institut für Kunst im
          Kontext
        </p>
      </div>
      <div style={{ display: "flex" }}>
        <p style={{ fontSize: "2vh", marginRight: 11, fontWeight: "Bold" }}>
          Teacher
        </p>
        <p style={{ fontSize: "2vh" }}>Claudia Hummel</p>
      </div>
      <div style={{ display: "flex" }}>
        <p style={{ fontSize: "2vh", marginRight: 11, fontWeight: "Bold" }}>
          Team
        </p>
        <p style={{ fontSize: "2vh" }}>
          Juliana Rivas, Ida Flik, Francisca Besoain, Bastián Fernández, Camila
          González, Marianne Briese, Juana Díaz, Antje Akkermann, Carolina
          Jacob, Birgit Schlegel, Paloma Aguirre, Sofía Dumay, Claudia Araya,
          Domínica Ortiz, Solange de Solminihac, Jule Gutekunst, Beatriz Suazo,
          Florencia de Solminihac, Samantha Grob, Costanza Piancastelli, Marieta
          Campos, Wenling Chung, Carmen Licancura, Maite Angélica Huentemilla,
          Anya
        </p>
      </div>
      <p style={{ fontSize: "2vh" }}>
        In the theoretical part of this Master‘s thesis, I decided to look at
        architecture - more specifically, architecture made for housing - from a
        feminist perspective. I examine the role of traditional housing
        typologies in the political-economic system we have in the western/ised
        society today.
      </p>
      <p style={{ fontSize: "2vh" }}>
        The central problem is the isolated treatment of reproductive labour.The
        separation of reproductive and productive labour is in turn reflected in
        the limited ways we can organise ourselves to live in order to solve
        reproductive tasks (single-family house and one-person flat). In the
        document I try to apply the practice of unlearning to architecture. And
        I refer to some ideas of the theory of the commons that have a relation
        to alternative forms of housing. To visualise these ideas, I have
        described in detail some examples of collective projects. Where the
        socialisation of reproductive labour is possible.
      </p>
      <p style={{ fontSize: "2vh" }}>
        In the artistic work, I realized a series of exercises on the topic,
        collecting, structuring, modeling and sharing ideas about it. These aim
        to develop a critical reflection on the dominant forms of housing.
      </p>
      <div>
        <img
          alt="project-two-photo"
          src={proThreeOne}
          style={{ width: "100%", marginTop: 16 }}
        />
      </div>
      <div>
        <p style={{ fontSize: "2vh", fontWeight: "bold" }}>
          Feminist forms of living / Excercise Timeline
        </p>
        <p style={{ fontSize: "2vh" }}>
          In order to organize and visualize what I found and what caught my
          attention in this research process, I decided to make a timeline. I
          organized in a zone the theoretical ideas and practical cases that
          speak of alternative ways of living in community. In another zone I
          placed dominant housing typologies and observations about them.
        </p>
        <img
          alt="project-two-photo"
          src={proThreeTwo}
          style={{ width: "100%", marginTop: 16 }}
        />
      </div>
    </>
  );
};

export default FeministFormsOfLiving;
