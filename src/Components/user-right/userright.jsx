import React from "react";
import "./userright.css";
import UserRightBox2 from "./userrightbox2.jsx";
import WebDes from "../../assets/webdes.svg";
import Arrowup from "../../assets/arrowup.svg";
import Arrowdown from "../../assets/arrowdown.svg";
import { useState } from "react";

export default function UserRight() {
  const [showup1, setShowup1] = useState(false);
  const [showup2, setShowup2] = useState(false);
  const [showup3, setShowup3] = useState(false);
  const [showup4, setShowup4] = useState(false);

  const handleShowUp1 = () => {
    if (showup1 == false) {
      return setShowup1(true);
    } else {
      return setShowup1(false);
    }
  };
  const handleShowUp2 = () => {
    if (showup2 == false) {
      return setShowup2(true);
    } else {
      return setShowup2(false);
    }
  };
  const handleShowUp3 = () => {
    if (showup3 == false) {
      return setShowup3(true);
    } else {
      return setShowup3(false);
    }
  };
  const handleShowUp4 = () => {
    if (showup4 == false) {
      return setShowup4(true);
    } else {
      return setShowup4(false);
    }
  };

  return (
    <div className="user-right-container">
      <div className="user-right-content">
        <div className="user-right-box1">
          <div className="right-feles">
            <h1>Your Recent Project</h1>
            <button>see all projects</button>
          </div>
          <div id="full-proj">
            <div className="web-des">
              <div className="web-feles">
                <img src={WebDes} />
                <div className="mrg-L">
                  <h3>Web Design Project</h3>
                  <p>10$/Hour</p>
                </div>
              </div>
              <button onClick={handleShowUp1}>
                <img src={`${showup1 == true ? Arrowup : Arrowdown}`} />
              </button>
            </div>
            <p className={`${showup1 == true ? "pfeles" : "hidden"}`}>
              This Project Involves implementing both frontend and back-end
              functionalities ,as well as integrating with third-party Apls.
            </p>
            <div className="line-feles"></div>
          </div>

          <div id="full-proj">
            <div className="web-des">
              <div className="web-feles">
                <img src={WebDes} />
                <div className="mrg-L">
                  <h3>Web Design Project</h3>
                  <p>10$/Hour</p>
                </div>
              </div>
              <button onClick={handleShowUp2}>
                <img src={`${showup2 == true ? Arrowup : Arrowdown}`} />
              </button>
            </div>
            <p className={`${showup2 == true ? "pfeles" : "hidden"}`}>
              This Project Involves implementing both frontend and back-end
              functionalities ,as well as integrating with third-party Apls.
            </p>
            <div className="line-feles"></div>
          </div>

          <div id="full-proj">
            <div className="web-des">
              <div className="web-feles">
                <img src={WebDes} />
                <div className="mrg-L">
                  <h3>Web Design Project</h3>
                  <p>10$/Hour</p>
                </div>
              </div>
              <button onClick={handleShowUp3}>
                <img src={`${showup3 == true ? Arrowup : Arrowdown}`} />
              </button>
            </div>
            <p className={`${showup3 == true ? "pfeles" : "hidden"}`}>
              This Project Involves implementing both frontend and back-end
              functionalities ,as well as integrating with third-party Apls.
            </p>
            <div className="line-feles"></div>
          </div>
          <div id="full-proj">
            <div className="web-des">
              <div className="web-feles">
                <img src={WebDes} />
                <div className="mrg-L">
                  <h3>Web Design Project</h3>
                  <p>10$/Hour</p>
                </div>
              </div>
              <button onClick={handleShowUp4}>
                <img src={`${showup4 == true ? Arrowup : Arrowdown}`} />
              </button>
            </div>
            <p className={`${showup4 == true ? "pfeles" : "hidden"}`}>
              This Project Involves implementing both frontend and back-end
              functionalities ,as well as integrating with third-party Apls.
            </p>
          </div>
        </div>

        <UserRightBox2 />
      </div>
    </div>
  );
}
