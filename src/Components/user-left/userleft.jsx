import React from "react";
import "./userleft.css";
import MustafaL from "../../assets/main-potos/mustafaemadL.svg";
import Stars5_0 from "../../assets/stars/stars(5.0).svg";
import EditPen from "../../assets/editpen.svg";
import Cross from "../../assets/cross.svg";
import { useState } from "react";
export default function UserLeft() {
  const [userName, setUserName] = useState("Mustafa Emad");
  const [isEditing, setIsEditing] = useState(false); // controls edit mode

  // Handles the input change
  const handleInputChange = (event) => {
    setUserName(event.target.value);
  };

  // Toggles the edit mode
  const toggleEditMode = () => {
    setIsEditing((prev) => !prev);
  };

  // Handles pressing Enter to confirm the name
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setIsEditing(false);
    }
  };


  return (
    <div className="user-left-container">
      <div className="user-left-content">
        <div className="user-left-box1">
          <img src={MustafaL} />
          <h1>
            {" "}
            {isEditing ? (
              <input className="edit-show"
                type="text"
                value={userName}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                onBlur={() => setIsEditing(false)} // closes edit mode on blur
                autoFocus
              />
            ) : (
              <span onClick={toggleEditMode}>{userName}</span> // shows name as text when not editing
            )}
          </h1>
          <img src={Stars5_0} />
          <button onClick={toggleEditMode}>
          Edit Profile</button>
        </div>
        <div className="user-left-box2">
          <div className="feles">
            <h1>About</h1>
            <button>
              {" "}
              <img src={EditPen} />
            </button>
          </div>
          <p>
            GreenTech Solutions Inc. Renewable Energy & Technology San
            Francisco, California, with operations in North America and Europe
          </p>
        </div>
        <div className="user-left-box3">
          <div className="feles1">
            <h1>Projects History</h1>
            <div>
              <button className="mrg-r-32px">
                <img src={Cross} />
              </button>
              <button>
                <img src={EditPen} />
              </button>
            </div>
          </div>
          <div>
            <div className="feles2">
              <div className="dot-container">
                <div className=" big-dot"></div>
                <div className="green-line"></div>
              </div>
              <div className="proj-name">
                <h1>project Name</h1>
                <h6>22 Jan 2024 - 11 May 2024. </h6>
                <p>
                  Developed a task management web application designed to help
                  users organize, prioritize, and track their daily tasks
                  efficiently.{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="feles2">
              <div className="dot-container">
                <div className=" big-dot"></div>
                <div className="green-line"></div>
              </div>
              <div className="proj-name">
                <h1>project Name</h1>
                <h6>22 Jan 2024 - 11 May 2024. </h6>
                <p>
                  Developed a task management web application designed to help
                  users organize, prioritize, and track their daily tasks
                  efficiently.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
