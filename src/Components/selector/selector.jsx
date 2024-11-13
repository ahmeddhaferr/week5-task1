import React from 'react'
import RightBox from "../rightbox/right_box.jsx";
import SecRightBox from "../secrightbox/SecRightBox";
import ThirdRightBox from "../thirdRightbox/ThirdRightBox";
import FourthRBox from "../fourthRBox/fourthRBox";
import useStore from '../../zustand/main-store.js';

export default function selector() {

const {num}= useStore()
  const boxesList = () => {
    if (num === 0) {
      return <RightBox />;
    } else if (num === 1) {
      return <SecRightBox />;
    } else if (num === 2) {
      return <ThirdRightBox />;
    } else if (num === 3) {
      return <FourthRBox />;
    }
  };



  return (
    <div>
        
      {boxesList()}

    </div>
  )
}