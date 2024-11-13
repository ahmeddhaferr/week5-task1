import React from "react";
import "./lines.css";
import useStore from "../../zustand/main-store";
export default function () {
  const { num } = useStore();

  return (
    <div className="flex1">
      <div className="line1" id="on"></div>
      <div className="diss">
        <div className="line2"></div>{" "}
        <div className={`${num >=1 ? "line3":""}`}></div>
        <div className={`${num >=2 ? "line4":""}`}></div>
      </div>
      <div className={`line5 ${num ==3 ? "line6":""}`}></div>
    </div>
  );
}
