import person from "../../assets/person.svg"; 
import person1 from "../../assets/person1.svg";
import person_on from "../../assets/person_on.svg";
import person1_on from "../../assets/person1_on.svg";
import arrow from "../../assets/arrow.svg";
import arrow1 from "../../assets/arrow1.svg";
import React from 'react'
import "./cards.css"
import { useState } from "react";
import { Link } from 'react-router-dom';


export default function cards() {

    const x=[arrow,arrow1]
 const [arrowImage, setArrowImage] = useState(x[0]);
  const [showButton, setShowButton] = useState(false);

  const handleDivClick = () => {
    setShowButton(true);
    setArrowImage(x[1])
  };
  const handleClick = (event) => {
    if (!showButton) {
      event.preventDefault(); 
      return;}
      
  };
  return (
   <> <div className="box">
        <div>
          <button className="card" onClick={handleDivClick}>
            <img src={person} id="black" />
            <img src={person_on} id="Steel_Blue" />
            <div className="par">
            <h3>Freelancer</h3>
            <p>I’m a freelancer ready to work for projects</p></div>
          </button>
        </div>
        <div>
          <button className="card" onClick={handleDivClick}>
            <img src={person1} id="black1" />
            <img src={person1_on} id="Steel_Blue1" />
            <div className="par">
            <h3>Client</h3>
            <p>I’m a client searching for talented freelancers</p></div>
          </button>
        </div>
      </div>
      <div>
      <Link to={"/page1"}>
        <button className={` btnnn ${showButton ? "show" : ""}  `} onClick={handleClick}>
          <p className="p1">Next</p> <img src={arrowImage} />
        </button></Link>
      </div></>
  )
}
