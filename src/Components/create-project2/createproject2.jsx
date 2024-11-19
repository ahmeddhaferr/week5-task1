import React from "react";
import "./createproject2.css";
import { useState } from "react";
import RedCross from "../../assets/redcross.svg";
import Stepper1 from "../stepper1/stepper1.jsx";
import useStore from "../../zustand/main-store.js";
import Crosswhite from "../../assets/crosswhite.svg";

export default function createproject2() {
  const toggleProj = useStore((state) => state.toggleProj);
  const [colorchange, setColorchange] = useState(false);
  const [colorchange1, setColorchange1] = useState(false);
  const [modalpop, setModalpop] = useState(false);
  const [modalpop1, setModalpop1] = useState(false);

  const handlebutton = () => {
    setColorchange(true)
    setColorchange1(false)
    setModalpop(true)
    setModalpop1(false)
  };
  const handlebutton1 = () => {
    setColorchange1(true)
    setColorchange(false)
    setModalpop(false)
    setModalpop1(true)
  };



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
        <div className="underr-stepper">
          <p>Project Duration</p>
          <input type="text" placeholder="Duration of the project" />
          <p id="m16">Pricing Type</p>
          <div className="fondos">
            <button
              className={`${colorchange ? "colorado" : "fondos-button"}`}
              onClick={handlebutton}
            >
              Per Hour
            </button>
            <button 
             className={`${colorchange1 ? "colorado" : "fondos-button"}`}
             onClick={handlebutton1}
            >For The Project</button>
          </div>
          <div>
          {modalpop && (<div className="homies">
  <p>Price Per Hour</p>
  <input type="text" placeholder="Enter Price"/>
</div>)}
          {modalpop1 && (<div className="homies">
  <p>Price For The Project</p>
  <input type="text" placeholder="Enter Price"/>
</div>)}
</div>
        </div>
      </div>
    </>
  );
}
