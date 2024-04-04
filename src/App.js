import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import About from "./Components/About";
import Alert from "./Components/Alert";
import React, { useState } from "react";

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

  const handleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setBtnMode("light");
      document.body.style.backgroundColor = "black";
      setColor("white");
      setBackgroundcolor("black");
      showAlert("dark mode has been enablel", "success");
    } else {
      setMode("light");
      setBtnMode("dark");
      document.body.style.backgroundColor = "white";
      setColor("black");
      setBackgroundcolor("white");
      showAlert("light mode has been enablel", "success");
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        about="About"
        mode={mode}
        btnMode={btnMode}
        handleMode={handleMode}
      />

      <Alert alert={alert} mode={mode} />

      <div className={`container my-3 text-${btnMode}`}>
        <Textform
          headline="Enter the text to analyze"
          mode={mode}
          alert={alert}
          showAlert={showAlert}
        />
      </div>

      <About
        className="container my-3 text"
        color={color}
        backgroundColor={backgroundcolor}
      />
    </>
  );
}

export default App;
