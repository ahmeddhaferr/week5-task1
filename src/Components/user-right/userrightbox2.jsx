import React from "react";
import "./userrightbox2.css";
import Stars_6 from "../../assets/stars/Stars(6.0).svg";
import Stars_7 from "../../assets/stars/Stars(7.0).svg";
import Stars_8 from "../../assets/stars/Stars(8.0).svg";
import Poto4 from "../../assets/photos/Poto4.svg";
import Poto5 from "../../assets/photos/Poto5.svg";
import Poto6 from "../../assets/photos/Poto6.svg";
import Poto7 from "../../assets/photos/Poto7.svg";
import Poto8 from "../../assets/photos/Poto8.svg";
export default function userrightbox2() {
  return (
    <div className="user-right-box2">
      <div className="free-lancer">
        <h1>Freelancers You Worked With</h1>
        <button>See All</button>
      </div>

      <div className="peghson">
      <div className="box2-feles1">
        <div className="box2-feles2">
          <img src={Poto4} className="cursor" />
          <div>
            <h4>Zena saad</h4>
            <p>2 months ago</p>
          </div>
        </div>
        <img src={Stars_8} />
      </div>
      <div className="box2-feles1">
        <div className="box2-feles2">
          <img src={Poto5} className="cursor" />
          <div>
            <h4>Ghoufran saad</h4>
            <p>3 months ago</p>
          </div>
        </div>
        <img src={Stars_7} />
      </div>
      <div className="box2-feles1">
        <div className="box2-feles2">
          <img src={Poto6} className="cursor" />
          <div>
            <h4>Huda salih</h4>
            <p>7 months ago</p>
          </div>
        </div>
        <img src={Stars_6} />
      </div>
      <div className="box2-feles1">
        <div className="box2-feles2">
          <img src={Poto7} className="cursor" />
          <div>
            <h4>Ali saad</h4>
            <p>1 year ago</p>
          </div>
        </div>
        <img src={Stars_7} />
      </div>
      <div className="box2-feles1">
        <div className="box2-feles2">
          <img src={Poto8} className="cursor" />
          <div>
            <h4>Ahmed Khaled</h4>
            <p>2 year ago</p>
          </div>
        </div>
        <img src={Stars_8} />
      </div>
      </div>
    </div>
  );
}
