import React from "react";
import "./createproject.css";
import RedCross from "../../assets/redcross.svg";
import Stepper1 from "../stepper1/stepper1.jsx";
import SelectGreenArrow from "../../assets/selectgreenarrow.svg";
import SelectArrow from "../../assets/selectarrow.svg";
import { useState } from "react";
import useStore from "../../zustand/main-store.js";
import Arrow1 from "../../assets/arrow1.svg";
import Media1 from "../../assets/media.svg";
import Document1 from "../../assets/document.svg";

export default function CreateProject() {
  const toggleProj = useStore((state) => state.toggleProj);
  const [drop, setDrop] = useState(false);
  const [valona, setValona] = useState("");
  const { num1, setNum1 } = useStore();
  const Qualifications = [
    "UIUX Designer",
    "Back-end",
    "Front-end",
    "Mobile app",
  ];

  const handleClick1 = () => {
    setNum1(num1 + 1);
  };

  const [chosen, setChosen] = useState("");

  const handleDrop = () => {
    setDrop(!drop);
  };

  return (
    <>
      <div className="overlay" onClick={toggleProj}>
      </div>

      <div className="main-create">
        <div className="felosoo-main">
          <div className="in-the-buttum">
            <div className="both-of-img">
              <div className="onda-feles">
                <img src={Media1} />
                Media
              </div>
              <div className="onda-feles">
                <img src={Document1} />
                document
              </div>
            </div>
            <div>
              <button onClick={handleClick1}>
                Next <img src={Arrow1} alt="" />
              </button>
            </div>
          </div>
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
          <div
            className={`${chosen ? "selection-act" : "selection"}`}
            onClick={handleDrop}
          >
            <p className={`${chosen ? "selection-active" : ""}`}>
              {chosen ? chosen : "Select option"}
            </p>
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
                    setDrop(false);
                  }}
                >
                  {el}
                </p>
              ))}
            </div>
          )}

          <h2>Description</h2>
          <textarea
            value={valona}
            onChange={() => {
              setValona();
            }}
            className={` text-area ${
              valona !== "" ? "text-area-on" : "text-area"
            }`}
            type="text"
            placeholder="Enter Description for the project"
          />
        </div>
      </div>
    </>
  );
}
