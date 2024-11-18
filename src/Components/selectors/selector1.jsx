import React from 'react'
import RightBox from "../rightbox/right_box.jsx";
import SecRightBox from "../secrightbox/SecRightBox.jsx";
import ThirdRightBox from "../thirdRightbox/ThirdRightBox.jsx";
import FourthRBox from "../fourthRBox/fourthRBox.jsx";
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
