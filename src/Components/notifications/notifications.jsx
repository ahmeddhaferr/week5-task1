import React from "react";
import "./notifications.css";
import Poto1 from "../../assets/potos/Poto1.svg";
import Poto2 from "../../assets/potos/Poto2.svg";
import Poto3 from "../../assets/potos/Poto3.svg";
import Poto4 from "../../assets/potos/Poto4.svg";
import Poto5 from "../../assets/potos/Poto5.svg";
import Poto6 from "../../assets/potos/Poto6.svg";
import Poto7 from "../../assets/potos/Poto7.svg";

export default function notifications() {
  return (
    <div className="main-user-activities">
      <div className="main-user-column">
        <div className="main-user-note1">
          <h1>Notification</h1>
          <p>
            You Have 3 <span>Notification</span> Today !
          </p>
        </div>
        <div>
          <p id="today">today</p>
          <div className="main-user-today">
            <div className="dot-two"></div>
            <div>
              <img src={Poto1} id="pointer" />
            </div>
            <div>
              <p id="inpo">
                <span id="C97AF">Zainab Saad</span> comment on your project{" "}
                <span id="hours">2h</span>
              </p>
            </div>
          </div>
          <div className="main-user-line1"></div>
          <div className="main-user-today">
            <div className="dot-two"></div>
            <div>
              <img src={Poto2} id="pointer" />
            </div>
            <div>
              <p id="inpo1">
                <span id="C97AF">Ali Saad</span> Apply your project{" "}
                <span id="hours">2h</span>
              </p>
            </div>
          </div>
          <div className="main-user-line1"></div>
          <div className="main-user-today">
            <div className="dot-two"></div>
            <div>
              <img src={Poto3} id="pointer" />
            </div>
            <div>
              <p id="inpo2">
                <span id="C97AF">Karar Emad</span> Liked your project{" "}
                <span id="hours">2h</span>
              </p>
            </div>
          </div>
          <div className="main-user-line1"></div>
        </div>

        <div>
        <p id="today">this week</p>

          <div className="main-user-this-week">
            <div>
              <img src={Poto4} id="pointer" />
            </div>
            <div>
              <p id="inpo3">
                <span id="C97AF">Zena saad</span> comment on your project{" "}
                <span id="hours">1d</span>
              </p>
            </div>
          </div>
          <div className="main-user-this-week">
            <div>
              <img src={Poto5} id="pointer" />
            </div>
            <div>
              <p id="inpo4">
                <span id="C97AF">ghoufran saad</span> comment on your project{" "}
                <span id="hours">2d</span>
              </p>
            </div>
          </div>
          <div className="main-user-this-week">
            <div>
              <img src={Poto6} id="pointer" />
            </div>
            <div>
              <p id="inpo5">
                <span id="C97AF">Huda salih</span> comment on your project{" "}
                <span id="hours">3d</span>
              </p>
            </div>
          </div>
          <div className="main-user-this-week">
            <div>
              <img src={Poto7} id="pointer" />
            </div>
            <div>
              <p id="inpo6">
                <span id="C97AF">Mohammed Saad</span> comment on your project{" "}
                <span id="hours">1w</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
