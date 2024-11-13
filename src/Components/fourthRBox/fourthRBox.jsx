import React from "react";
import { useState } from "react";
import "./fourthRBox.css";
import Lines from "../../tools/lines/lines";
import Eye from "../../assets/eye.svg";
import Eyeof from "../../assets/eyeof.svg";
import { Link } from "react-router-dom";

export default function fourthRBox() {
  const [chng, setChng] = useState(false);
  const [chng1, setChng1] = useState(false);
  const [chng2, setChng2] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputType, setInputType] = useState("password");

  const changeType = () => {
    setInputType((type) => (type === "password" ? "text" : "password"));
  };

  return (
    <div className="right-box4">
      <Lines/>
      <div className="started4">
        <h1>Enter Your Information</h1>
        <p>
          Please enter your personal information to complete the registration
          process.
        </p>
      </div>

      <div className="column">
        <div>
          <p className="pp">Name</p>
          <input
            value={name}
            type="text"
            className={`iinput ${chng ? "ax" : ""}`}
            onChange={(el) => {
              setName(el.target.value), setChng(true);
            }}
            placeholder="Enter your Full name "
          />
        </div>
        <div>
          <p className="pp">Email</p>
          <input
            value={email}
            type="text"
            className={`iinput ${chng1 ? "ax" : ""}`}
            onChange={(el) => {
              setEmail(el.target.value), setChng1(true);
            }}
            placeholder="Enter your Email Address"
            typeof="Email"
          />
        </div>
        <div className="pos">
          <p className="pp">Password</p>
          <input
            id="pss"
            value={password}
            type={inputType}
            className={`iinput ${chng2 ? "ax" : ""}`}
            onChange={(el) => {
              setPassword(el.target.value), setChng2(true);
            }}
            placeholder="Enter Password"
            typeof="Password"
          />
          <button className="pass" onClick={changeType}>
            {" "}
            <img src={`${inputType == "text" ? Eye : Eyeof}`} />
          </button>
        </div>
        <Link to="/Main$Paige">
          <button
            className={`bttnn ${
              name !== "" && email !== "" && password.length > 7 ? "btnn2" : ""
            }`}
          >
            <p className="p1">Complete registration </p>
          </button>
        </Link>
      </div>
    </div>
  );
}
