import React from "react";
import MainHeader from "../main-header/main-header.jsx";
import UserLeft from "../user-left/userleft.jsx";
import UserMid from "../user-mid/usermid.jsx";
import UserRight from "../user-right/userright.jsx";

import "./main-user.css";

export default function mainUser() {
  return (
    <>
      <div>
        <MainHeader />
      </div>
      <div className="above-all">
        <div className="main-user-container-es">
          <div className="main-user-content-es">
            <div>
              <UserLeft />
            </div>
            <div>
              <UserMid />
            </div>
            <div>
              <UserRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
