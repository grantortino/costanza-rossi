import React from "react";
import { getClassNames } from "../../styles/getClassNames";

const MainPage = () => {
  let { body, title } = getClassNames();
  return (
    <>
      <div className={body}>
        <div>
          <div className={title}>Costanza Rossi de S.</div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
