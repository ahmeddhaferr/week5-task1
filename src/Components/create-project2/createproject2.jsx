import React from "react";
import "./createproject2.css";
import { useState } from "react";
import RedCross from "../../assets/redcross.svg";
import Stepper1 from "../stepper1/stepper1.jsx";
import useStore from "../../zustand/main-store.js";
import Crosswhite from "../../assets/crosswhite.svg";

export default function createproject2() {
  const toggleProj = useStore((state) => state.toggleProj);

  return (
    <>
      <div className="overlay1" onClick={toggleProj}></div>
      <div className="main-create1">
        <div className="felosoo-main1">
          <h1> CreateProject</h1>
          <button onClick={toggleProj} className="close-button-red">
            <img src={RedCross} alt="" />
          </button>
          <button className="add-project" onClick={toggleProj}>
            Add Project <img src={Crosswhite} alt="" />
          </button>
        </div>
        <div>
          <Stepper1 />
        </div>
        <div>
            
        </div>
      </div>
    </>
  );
}
