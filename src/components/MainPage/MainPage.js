import React from "react";
import { getClassNames } from "../../styles/getClassNames";

const MainPage = () => {
  let { body, viewPort } = getClassNames();
  return (
    <>
      <div className={body}>
        <div>
          <div>Costanza Rossi de S.</div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
