import "./right_box.css";
import Lines from "../../tools/lines/lines";
import Cards from "../../tools/cards/cards";

const RightBox = () => {

  return (
    <div className="right-box1">
      <Lines />
      <div className="started1">
        <h1>Let’s Get started!</h1>
        <p>How do you plan to use this platform</p>
      </div>
      <Cards />
    </div>
  );
};

export default RightBox;
