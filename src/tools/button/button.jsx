import React from "react";
import "./button.css";
import useStore from "../../zustand/main-store";

export default function Button() {
  const showButton = useStore((state) => state.showButton);
  const arrowImage = useStore((state) => state.arrowImage);

  const {num,setNum} =useStore()

  const handleClick = (event) => {
    if (!showButton) {
      event.preventDefault();
      return;
    }else{
      setNum(num+1)
    }
   ;
  };
  return (
    <div>
      <button
        className={` btnnn ${showButton ? "show" : ""}  `}
        onClick={handleClick}
      >
        <p className="p1">Next</p> <img src={arrowImage} />
      </button>
    </div>
  );
}
