import React from "react";
import "./stepper1.css";
import useStore from "../../zustand/main-store";

export default function stepper1() {

  const { num1 } = useStore();



  return (
    <div className="stepper1-main">
      <div className="line1-stepper" id="on"></div>
      <div className="line2-stepper" >

      <div className={`${num1 > 0 ? "line3-stepper":""}`} ></div>
      </div>
    </div>
  );
}
