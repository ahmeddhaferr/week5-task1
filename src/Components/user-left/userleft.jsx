import React from "react";
import "./userleft.css";
import MustafaL from "../../assets/main-potos/mustafaemadL.svg";
import Stars5_0 from "../../assets/stars/stars(5.0).svg";
import EditPen from "../../assets/editpen.svg";
import Cross from "../../assets/cross.svg";
import { useState } from "react";
export default function UserLeft() {
  const speech = "GreenTech Solutions Inc. Renewable Energy & Technology San Francisco, California, with operations in North America and Europe"
  const [userName, setUserName] = useState("Mustafa Emad");
  const [about, setAbout] = useState(speech);
  const [isEditing, setIsEditing] = useState(false);
  const [isEditinga, setIsEditinga] = useState(false);

  const handleInputChange = (event) => {
    setUserName(event.target.value);
  };
  const handleInputChangeAbout = (event) => {
    setAbout(event.target.value);
  };

  const toggleEditMode = () => {
    setIsEditing((prev) => !prev);
  };
  const toggleEditModeAbout = () => {
    setIsEditinga((prev) => !prev);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setIsEditing(false);
    }
  };
  const handleKeyPressAbout = (event) => {
    if (event.key === "Enter") {
      setIsEditinga(false);
    }
  };

  return (
    <div className="user-left-container">
      <div className="user-left-content">
        <div className="user-left-box1">
          <img id="prof-pic" src={MustafaL} />
          <h1>
            {isEditing ? (
              <input
                className="edit-show"
                type="text"
                value={userName}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                onBlur={() => setIsEditing(false)}
                autoFocus
              />
            ) : (
              <span onClick={toggleEditMode}>{userName}</span>
            )}
          </h1>
          <img src={Stars5_0} />
          <button onClick={toggleEditMode}>Edit Profile</button>
        </div>
        <div className="user-left-box2">
          <div className="feles">
            <h1>About</h1>
            <button onClick={toggleEditModeAbout}>
              <img src={EditPen} />
            </button>
          </div>
          <p>
          {isEditinga ? (
              <textarea
                className="edit-show1"
                type="text"
                value={about}
                onChange={handleInputChangeAbout}
                onKeyPress={handleKeyPressAbout}
                onBlur={() => setIsEditinga(false)}
                autoFocus
              />
            ) : (
              <span onClick={toggleEditModeAbout}>{about}</span>
            )}
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
