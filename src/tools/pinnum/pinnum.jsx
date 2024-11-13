import React, { useState, useEffect } from "react";
import "./pinnum.css";
import clock from "../../assets/clock.svg";
import useStore from "../../zustand/main-store";

export default function Pinnum() {
  const [pin, setPin] = useState(["", "", "", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(59);
  const [changer, setChanger] = useState(false);
  const {num,setNum} =useStore()


  const handleChange = (e, index) => {
    const { value } = e.target;
    if (/^\d$/.test(value)) {
      const newPin = [...pin];
      newPin[index] = value;
      setPin(newPin);

      if (index < pin.length - 1) {
        e.target.nextSibling.focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newPin = [...pin];
      newPin[index] = "";
      setPin(newPin);

      if (index > 0 && pin[index] === "") {
        e.target.previousSibling.focus();
      }
    }
  };

  useEffect(() => {
    setChanger(pin.every((digit) => digit !== ""));
  }, [pin]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [timeLeft]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  const handleClick = (event) => {
    if (!changer) {
      event.preventDefault();
      return;
    }else {
      setNum(num+1)
    }
  };

  return (
    <>
      <div className="flex-box">
        {pin.map((value, index) => (
          <input
            key={index}
            className="intbox"
            type="tel"
            maxLength="1"
            value={value}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        ))}
      </div>
      <div className="timer">
        <img src={clock} alt="clock icon" />
        <div>
          <p>{formatTime(timeLeft)}</p>
        </div>
      </div>
      <div className="resend">
        <p>Didn't receive a message? </p>
        <button
          className={`bon ${timeLeft === 0 ? "rese" : ""}`}
          onClick={() => {
            if(timeLeft !== 0){
              return
            }
            else{
              timeLeft === 0, setTimeLeft(59);

            }
            
          }}
        >
          Resend
        </button>
      </div>

      <div>
          <button
            className={`bbttn ${changer ? "btnact" : ""}`}
            onClick={handleClick}
          >
            <p className="p1">Verify</p>
          </button>
      </div>
    </>
  );
}
