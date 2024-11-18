import "./App.css";
import LeftBox from "./Components/leftbox/left_box";
import Selector from "./Components/selectors/selector1";
import MainUser from "./Components/main-user/main-user";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
                <div>
                <Selector />
                </div>
                


              </div>
            }
          />
          <Route   path="/Main$Paige"
            element={
              <MainUser/>
            }     />

        </Routes>
      </Router>
    
    </>
  );
}

export default App;
