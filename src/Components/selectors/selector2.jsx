import React from "react";
import CreateProject from "../create-project/createproject";
import CreateProject2 from "../create-project2/createproject2";
import useStore from "../../zustand/main-store";

export default function Selector2() {
    const {num1}= useStore()


  const boxesList1 = () => {
    if (num1 === 0) {
      return <CreateProject />;
    } else if (num1 === 1) {
      return <CreateProject2 />;
    } else {
      return;
    }
  };

  return <div>{boxesList1()}</div>;
}
