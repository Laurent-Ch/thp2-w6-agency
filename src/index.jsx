import { React, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style.scss";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Works from "./pages/Works/Works";
import Navbar from "./components/Navbar/Navbar";
import DarkModeContext from "./contexts/DarkmodeContext";
import ProjectDisplay from "./pages/Works/components/ProjectDisplay/ProjectDisplay";

const App = () => {
  let testArray = "company-study-case";
  let newVariable = testArray.slice(0, -11);
  console.log(testArray);
  console.log(newVariable);

  // Darkmode v1.
  // const [darkmode, setDarkmode] = useState(false);

  // Darkmode v2.
  // If the localStorage value doesn't exist yet, create it.
  if (localStorage.getItem("savedDarkmode") === null) {
    localStorage.setItem("savedDarkmode", "false");
  }
  // Get the value from the localStorage and convert it back to a boolean.
  let savedStatustoBoolean =
    localStorage.getItem("savedDarkmode") === "false" ? false : true;
  // Set the current darkmode to the saved boolean value.
  const [darkmode, setDarkmode] = useState(savedStatustoBoolean);
  // If the current darkmode changes, save it on the localStorage
  useEffect(() => {
    localStorage.setItem("savedDarkmode", darkmode);
  }, [darkmode]);

  return (
    <div
      className={
        darkmode.toString() === "true"
          ? "page-container dark"
          : "page-container light"
      }
    >
      <Router>
        <DarkModeContext.Provider
          value={{
            darkmode,
            toggle: () => {
              setDarkmode(!darkmode);
            },
          }}
        >
          <h1 className="site-title">the agency project</h1>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/works" element={<Works />}>
                {/* Either put "/works here or in the Link creation" */}
                <Route path="/works/:company" element={<ProjectDisplay />} />
              </Route>
            </Routes>
          </main>
        </DarkModeContext.Provider>
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
