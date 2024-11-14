import React from "react";
import "./createproject.css";
import RedCross from "../../assets/redcross.svg";
import Stepper1 from "../stepper1/stepper1.jsx";
import SelectGreenArrow from "../../assets/selectgreenarrow.svg";
import SelectArrow from "../../assets/selectarrow.svg";
import { useState } from "react";
import useStore from "../../zustand/main-store.js";

export default function CreateProject() {

  const {proj,setProj} =useStore()

 
const toggleProj =()=>{
  setProj(!proj)
}



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
              

              <select name="" id="" className="selection">
              <p>Select option</p>
              <img src={SelectArrow} alt="" />
              <option value="" disabled selected hidden>Select option</option>
                <option value=""> UIUX Designer</option>
                <option value=""> Back-end</option>
                <option value="">Front-end </option>
                <option value=""> Mobile app</option>
              </select>

            <h2>Description</h2>
          </div>
        </div>
      </div>
    </>
  );
}
