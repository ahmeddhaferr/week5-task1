import person from "../../assets/person.svg";
import person1 from "../../assets/person1.svg";
import person_on from "../../assets/person_on.svg";
import person1_on from "../../assets/person1_on.svg";
import Button from "../button/button.jsx";
import React from "react";
import "./cards.css";
import useStore from "../../zustand/main-store.js";


export default function cards() {
  const handleDivClick = useStore((state) => state.handleDivClick);

  return (
    <>
      {" "}
      <div className="box">
        <div>
          <button className="card" onClick={handleDivClick}>
            <img src={person} id="black" />
            <img src={person_on} id="Steel_Blue" />
            <div className="par">
              <h3>Freelancer</h3>
              <p>I’m a freelancer ready to work for projects</p>
            </div>
          </button>
        </div>
        <div>
          <button className="card" onClick={handleDivClick}>
            <img src={person1} id="black1" />
            <img src={person1_on} id="Steel_Blue1" />
            <div className="par">
              <h3>Client</h3>
              <p>I’m a client searching for talented freelancers</p>
            </div>
          </button>
        </div>
      </div>
      <Button />
    </>
  );
}
