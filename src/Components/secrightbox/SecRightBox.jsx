import React from "react";
import "./SecRightBox.css";
import Lines from "../../tools/lines/lines";
import flag from "../../assets/flag.svg"
import { useState } from "react";
import useStore from "../../zustand/main-store";



export default function SecRightBox() {
 
  const [phone, setPhone] = useState("");
  const [x,setX] =useState(false)
  const {num,setNum} =useStore()
 
  const handle = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 10) {
      setPhone(value);
      setX(value.length ==10)
    }
  };


  const handleClick = (event) => {
    if (!x) {
      event.preventDefault(); 
      return;}else{
        setNum(num+1)
      }
      
  };

  return (
    <div className="right-box2">
      <Lines/>
      <div className="started2">
        <h1>Enter Your Phone Number</h1>
        <p>
          Enter your phone number to verify your identity and the validity of
          your number to safely activate your account on the platform.
        </p>
      </div>
      <div className="sew">
        <p className="p">Phone Number</p>
        <div className="inpbox">
            <div className="boxiq"><img src={flag} /> <p>+964</p></div>
            <div className="inpt" >
                <input maxLength={10}  placeholder="Enter Your Phone Number" type="tel"
              value={phone}
              onChange={handle}/>
            </div>

        </div>
        <button className={` btn ${ x ? "btn2":""}`} onClick={handleClick}>
          <p className="p1">Send verification code</p>
        </button>
      </div>
    </div>
  );
}
