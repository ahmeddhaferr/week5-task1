import React from "react";
import "./ThirdRightBox.css";
import Pin from "../../tools/pinnum/pinnum.jsx";
import Lines from "../../tools/lines/lines";

export default function ThirdRightBox() {
  return (
    <div className="right-box3">
      <Lines/>
      <div className="started3">
        <h1>Verify phone number</h1>
        <p>Enter the verification code sent to +9647700000000 via WhatsApp</p>
      </div>
      <Pin />
    </div>
  );
}
