/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import proFour from "../../../assets/pro-four.png";

const Pedestal = () => {
  //   const { links } = getClassNames();
  return (
    <>
      <div style={{ margin: "0vh 0vh 1.7vh 0vh" }}>
        <p style={{ fontSize: "4vh", fontWeight: "Bold", margin: "0 auto" }}>
          Medical history granite, pedestal
        </p>
      </div>

      <div style={{ display: "flex" }}>
        <p style={{ fontSize: "2vh", marginRight: 11, fontWeight: "Bold" }}>
          Date
        </p>
        <p style={{ fontSize: "2vh" }}>23.3 - 15.4.20180</p>
      </div>
      <div style={{ display: "flex" }}>
        <p style={{ fontSize: "2vh", marginRight: 11, fontWeight: "Bold" }}>
          Exhibition
        </p>
        <p style={{ fontSize: "2vh" }}>
          Empty plinths, removed monuments in OKK - Organ kritischer Kunst
          (Wedding)
        </p>
      </div>
      <div style={{ display: "flex" }}>
        <p style={{ fontSize: "2vh", marginRight: 11, fontWeight: "Bold" }}>
          Format
        </p>
        <p style={{ fontSize: "2vh" }}>Installation 3,00 x 0,50m</p>
      </div>
      <div style={{ display: "flex" }}>
        <p style={{ fontSize: "2vh", marginRight: 11, fontWeight: "Bold" }}>
          Translation and editor
        </p>
        <p style={{ fontSize: "2vh" }}>Anne Kathrin Müller</p>
      </div>
      <p style={{ fontSize: "2vh" }}>
        The organisation „GeDenkOrt Charité“ is a project of the Charité -
        Universitätsmedizin Berlin, which deals with the topic „Science in
        Responsibility“. My focus is on the history of psychiatry and the
        responsibility of psychiatry, conditioned by the task of the seminar to
        put an empty pedestal in the psychiatric wing of the Charité. The
        pedestal carried once the bust of Carl Westphal (psychiatrist). In this
        context, I came across a text on transcultural psychiatry that makes it
        clear that the perception of psychological normality or abnormality is
        strongly dependent on the culture in which it is diagnosed. That is,
        that behaviour in a different cultural setting (different in terms of
        place or time) is perceived as normal, which in the here and now might
        have led to a diagnosis of mental illness.
      </p>
      <p style={{ fontSize: "2vh" }}>
        To give a concrete example that comes from my cultural background:
        before the Mapuche climb a mountain, they ask the mountain for
        permission to enter it - a behaviour that would certainly be perceived
        as „crazy“ when transferred to today‘s Berlin. Inspired by this
        respectful gesture of the Mapuche, I wanted to ask the empty pedestal
        for permission to deal with it. This gave rise to the idea of looking at
        the pedestal as a patient and myself as his psychiatrist in a joint
        therapy conversation, in order to deal directly with his story, his
        worries and fears, and finally also with the possibilities of his
        healing.
      </p>
      <div>
        <img
          alt="project-two-photo"
          src={proFour}
          style={{ width: "100%", marginTop: 16 }}
        />
      </div>
    </>
  );
};

export default Pedestal;
