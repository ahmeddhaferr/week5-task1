import React from "react";
import "./main-header.css";
import Logo from "../../assets/logo.svg";
import SearchIcon from "../../assets/searchicon.svg";
import Bell from "../../assets/bell.svg";
import Bellon from "../../assets/bellon.svg";
import Notifications from "../notifications/notifications.jsx";
import { useState } from "react";
export default function mainHeader() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="main-user-header">
      <div className="main-user-container">
        <div className="main-user-content">
          <div className="main-user-logo">
            <img src={Logo} />
          </div>

          <div className="main-user-menu">
            <a href="#" id="Home">
              Home
            </a>
            <a href="#">Dashboard</a>
            <a href="#">Settings</a>
          </div>

          <div className="main-user-right-side">
            <div className="main-user-block">
              <input type="text" placeholder="Search" />
              <button>
                <img src={SearchIcon} />
              </button>
            </div>
            <div className="main-user-notifications">
              <button onClick={toggleModal}>
                <img src={`${modal == true ? Bellon : Bell}`} />
              </button>
              <div
                className={`blue-dot ${
                  modal == true ? "blue-dot-off" : "blue-dot"
                }`}
              ></div>
              {modal && <Notifications />}
            </div>
          </div>
        </div>
        <div className="main-user-line"></div>
      </div>
    </div>
  );
}
