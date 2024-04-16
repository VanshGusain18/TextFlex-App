import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import About from "./Components/About";
import Alert from "./Components/Alert";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [btnMode, setBtnMode] = useState("dark");
  const [color, setColor] = useState("black");
  const [backgroundcolor, setBackgroundcolor] = useState("white");
  const [alert, setAlert] = useState(null);

  const showAlert = (messenge, type) => {
    setAlert({
      msg: messenge,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const handleRed = () => {
    setMode("danger");
    setBtnMode("light");
    document.body.style.backgroundColor = "red";
    setColor("white");
    setBackgroundcolor("red");
    showAlert("red mode has been enabled", "success");
  };
  const handleYellow = () => {
    setMode("warning");
    setBtnMode("dark");
    document.body.style.backgroundColor = "yellow";
    setColor("black");
    setBackgroundcolor("yellow");
    showAlert("yellow mode has been enabled", "success");
  };
  const handleGreen = () => {
    setMode("success");
    setBtnMode("light");
    document.body.style.backgroundColor = "green";
    setColor("white");
    setBackgroundcolor("green");
    showAlert("yellow mode has been enabled", "success");
  };
  const handleLight = () => {
    setMode("light");
    setBtnMode("dark");
    document.body.style.backgroundColor = "white";
    setColor("black");
    setBackgroundcolor("white");
    showAlert("light mode has been enabled", "success");
  };
  const handleDark = () => {
    setMode("dark");
    setBtnMode("light");
    document.body.style.backgroundColor = "black";
    setColor("white");
    setBackgroundcolor("black");
    showAlert("dark mode has been enabled", "success");
  };

  const handleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setBtnMode("light");
      document.body.style.backgroundColor = "black";
      setColor("white");
      setBackgroundcolor("black");
      showAlert("dark mode has been enabled", "success");
    } else {
      setMode("light");
      setBtnMode("dark");
      document.body.style.backgroundColor = "white";
      setColor("black");
      setBackgroundcolor("white");
      showAlert("light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextFlex"
          about="About"
          mode={mode}
          btnMode={btnMode}
          handleMode={handleMode}
          handleRed={handleRed}
          handleYellow={handleYellow}
          handleGreen={handleGreen}
          handleLight={handleLight}
          handleDark={handleDark}
        />

        <Alert alert={alert} mode={mode} />

        <Switch>
          <Route path="/about">
            <About
              className="container my-3 text"
              color={color}
              backgroundColor={backgroundcolor}
            />
          </Route>
          <Route path="/">
            <div className={`container my-3 text-${btnMode}`}>
              <Textform
                headline="TextFlex: Your Text, Your Way. Manipulate text effortlessly."
                mode={mode}
                alert={alert}
                showAlert={showAlert}
              />
            </div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
