import React from 'react'
import "./ThirdRightBox.css"
import Lines3 from "../../tools/lines3/lines3.jsx"
import Pin from "../../tools/pinnum/pinnum.jsx"





export default function ThirdRightBox() {
  return (


    <div className='right-box3'>
<Lines3/>
<div className="started3">
        <h1>Verify phone number</h1>
        <p>
        Enter the verification code sent to +9647700000000 via WhatsApp
        </p>
      </div>
<Pin/>



    </div>
  )
}
