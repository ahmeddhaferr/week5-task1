import React from "react";
import "./createproject.css";
import RedCross from "../../assets/redcross.svg";
import Stepper1 from "../stepper1/stepper1.jsx";
import SelectGreenArrow from "../../assets/selectgreenarrow.svg";
import SelectArrow from "../../assets/selectarrow.svg";
import { useState } from "react";
import useStore from "../../zustand/main-store.js";

export default function CreateProject() {
  const toggleProj = useStore((state) => state.toggleProj);
  const [drop, setDrop] = useState(false);
  const Qualifications = [
    "UIUX Designer",
    "Back-end",
    "Front-end",
    "Mobile app",
  ];
  const [chosen, setChosen] = useState("");

  const handleDrop = () => {
    setDrop(!drop);
  };

  return (
    <>
      <div className="overlay">
        <div className="main-create">
          <div className="felosoo-main">
            <h1> CreateProject</h1>
            <button onClick={toggleProj}>
              <img src={RedCross} alt="" />
            </button>
          </div>
          <div>
            <Stepper1 />
          </div>
          <div className="veno-main">
            <h1>Select Required Qualifications</h1>
            <div className={`${chosen ? "selection-act":"selection"}`} onClick={handleDrop}>
              <p className={`${chosen ? "selection-active":""}`}>{chosen ? chosen : "Select option"}</p>
              <img
                src={`${drop ? SelectGreenArrow : SelectArrow}`}
                onClick={handleDrop}
              />
            </div>
            {drop && (
              <div className="drop-down-class">
                {Qualifications.map((el) => (
                  <p
                    onClick={() => {
                      setChosen(el);
                    }}
                  >
                    {el}
                  </p>
                ))}
              </div>
            )}

            <h2>Description</h2>
            <input type="text" />
          </div>
        </div>
      </div>
    </>
  );
}
