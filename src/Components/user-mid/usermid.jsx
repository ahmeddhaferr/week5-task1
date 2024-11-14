import React from "react";
import "./usermid.css";
import small from "../../assets/main-potos/mustafasmall.svg";
import crosswhite from "../../assets/crosswhite.svg";
import Dots from "../../assets/dots.svg";
import Coding from "../../assets/coding.svg";
import Like from "../../assets/like.svg";
import Comment from "../../assets/comment.svg";

export default function UserMid() {
  return (
    <div className="user-mid-container">
      <div className="user-mid-content">
        <div className="user-mid-box1">
          <img src={small} alt="" />

          <div className="blocat">
            <input type="text" placeholder="Mustafa Let’s Create a Project !" />
            <button>
              <img src={crosswhite} alt="" />
            </button>
          </div>
        </div>

        <div className="user-mid-box2">
          <div className="user-felos">
            <div className="felos">
              <div className="circle-poto"></div>
              <div>
                <h1>Client Name</h1>
                <p>Posted 2 hours ago </p>
              </div>
            </div>

            <div className="felos2">
              <p>available</p>
              <button>
                <img src={Dots} alt="" />
              </button>
            </div>
          </div>

          <div className="contra">
            <h3>
              Looking for Full-Sack Developer
              <br />
              with experience +2 years
            </h3>
            <h4>
              to build a responsive, user-focused web application. Must be
              skilled in both front-end and back-end development...See more
            </h4>
            <img src={Coding} alt="" />
            <div className="bottom-post">
              <div className="mid-row">
                <button>
                  <img src={Like} alt="" />
                </button>{" "}
                <p>like</p>
              </div>
              <div className="mid-row">
                <button>
                  <img src={Comment} alt="" />
                </button>{" "}
                <p>comment</p>
              </div>
            </div>
          </div>
        </div>
        <div className="user-mid-box2">
          <div className="user-felos">
            <div className="felos">
              <div className="circle-poto"></div>
              <div>
                <h1>Client Name</h1>
                <p>Posted 2 hours ago </p>
              </div>
            </div>

            <div className="felos2">
              <p>available</p>
              <button>
                <img src={Dots} alt="" />
              </button>
            </div>
          </div>

          <div className="contra">
            <h3>
              Looking for Full-Sack Developer
              <br />
              with experience +2 years
            </h3>
            <h4>
              to build a responsive, user-focused web application. Must be
              skilled in both front-end and back-end development
            </h4>

            <p className="contra-p1">Duration of project</p>
            <p className="contra-p2">4 Months</p>
            <p className="contra-p1">Pricing</p>
            <p className="contra-p2">
              Hourly <span>$ 50</span>
            </p>

            <div className="bottom-post">
              <div className="mid-row">
                <button>
                  <img src={Like} alt="" />
                </button>{" "}
                <p>like</p>
              </div>
              <div className="mid-row">
                <button>
                  <img src={Comment} alt="" />
                </button>{" "}
                <p>comment</p>
              </div>
            </div>
          </div>
        </div>
        <div className="user-mid-box2">
          <div className="user-felos">
            <div className="felos">
              <div className="circle-poto"></div>
              <div>
                <h1>Client Name</h1>
                <p>Posted 2 hours ago </p>
              </div>
            </div>

            <div className="felos2">
              <p>available</p>
              <button>
                <img src={Dots} alt="" />
              </button>
            </div>
          </div>

          <div className="contra">
            <h3>
              Looking for Full-Sack Developer
              <br />
              with experience +2 years
            </h3>
            <h4>
              to build a responsive, user-focused web application. Must be
              skilled in both front-end and back-end development
            </h4>

            <p className="contra-p1">Duration of project</p>
            <p className="contra-p2">4 Months</p>
            <p className="contra-p1">Pricing</p>
            <p className="contra-p2">
              Hourly <span>$ 50</span>
            </p>

            <div className="bottom-post">
              <div className="mid-row">
                <button>
                  <img src={Like} alt="" />
                </button>{" "}
                <p>like</p>
              </div>
              <div className="mid-row">
                <button>
                  <img src={Comment} alt="" />
                </button>{" "}
                <p>comment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
