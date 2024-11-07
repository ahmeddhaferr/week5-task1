import "./App.css";
import LeftBox from "./Components/leftbox/left_box";
import RightBox from "./Components/rightbox/right_box";
import SecRightBox from "./Components/secrightbox/SecRightBox";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ThirdRightBox from "../src/Components/thirdRightbox/ThirdRightBox";
import FourthRBox from "./Components/fourthRBox/fourthRBox";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div className="main">
                <LeftBox />
                <RightBox />
              </div>
            }
          />
          <Route
            path="/page1"
            element={
              <div className="main">
                <LeftBox />
                <SecRightBox />
              </div>
            }
          />

          <Route
            path="/page2"
            element={
              <div className="main">
                <LeftBox />
                <ThirdRightBox />
              </div>
            }
          />

          <Route
            path="/page3"
            element={
              <div className="main">
                <LeftBox />
                <FourthRBox />
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
