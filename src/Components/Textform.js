import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");

  const handleChange = (evt) => {
    setText(evt.target.value);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase", "success");
  };

  const handleSeClick = () => {
    let newText = () => {
      let lower = text.toLowerCase();
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    };
    setText(newText);
    props.showAlert("converted to Sentence case", "success");
  };

  const handlePaClick = () => {
    let newText = () => {
      let lower = text.toLowerCase();
      let words = lower.split(" ");
      let capitalizedWords = words.map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1)
      );
      return capitalizedWords.join("");
    };
    setText(newText);
    props.showAlert("converted to Pascal Case", "success");
  };

  const handleSnClick = () => {
    let newText = () => {
      let textTwo = "";
      for (let i = 0; i < text.length; i++) {
        if (text[i] === " ") {
          textTwo += "_";
        } else {
          textTwo += text[i];
        }
      }
      return textTwo;
    };
    setText(newText);
    props.showAlert("converted to Snake case", "success");
  };

  const handleClClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("cleared", "success");
  };

  let btnCol = "";

  if (
    props.mode === "dark" ||
    props.mode === "danger" ||
    props.mode === "success"
  ) {
    btnCol = "light";
  }

  if (props.mode === "light" || props.mode === "warning") {
    btnCol = "dark";
  }

  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h1>{props.headline}</h1>
          <textarea
            className={`form-control border border-${btnCol}`}
            id="exampleFormControlTextarea1"
            rows="10"
            value={text}
            onChange={handleChange}
            style={{
              backgroundColor:
                props.mode === "danger"
                  ? "red"
                  : props.mode === "success"
                  ? "green"
                  : props.mode === "warning"
                  ? "yellow"
                  : props.mode === "dark"
                  ? "black"
                  : props.mode === "light"
                  ? "white"
                  : "",
              color:
                props.mode === "danger"
                  ? "white"
                  : props.mode === "success"
                  ? "white"
                  : props.mode === "warning"
                  ? "black"
                  : props.mode === "dark"
                  ? "white"
                  : props.mode === "light"
                  ? "black"
                  : "",
            }}
          ></textarea>
        </div>

        <button
          disabled={text.length === 0}
          className={`btn btn-${btnCol} mx-1 my-1`}
          onClick={handleUpClick}
        >
          Upperclass
        </button>

        <button
          disabled={text.length === 0}
          className={`btn btn-${btnCol} mx-1 my-1`}
          onClick={handleLoClick}
        >
          Lowercase
        </button>

        <button
          disabled={text.length === 0}
          className={`btn btn-${btnCol} mx-1 my-1`}
          onClick={handleSeClick}
        >
          Sentence Case
        </button>

        <button
          disabled={text.length === 0}
          className={`btn btn-${btnCol} mx-1 my-1`}
          onClick={handlePaClick}
        >
          Pascal Case
        </button>

        <button
          disabled={text.length === 0}
          className={`btn btn-${btnCol} mx-1 my-1`}
          onClick={handleSnClick}
        >
          Snake Case
        </button>

        <button
          disabled={text.length === 0}
          className={`btn btn-${btnCol} mx-1 my-1`}
          onClick={handleClClick}
        >
          Clear
        </button>
      </div>

      <div className="container my-2">
        <h2>Your text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((ele) => {
              return ele.length !== 0;
            }).length
          }{" "}
          words {text.length} characters
        </p>
        <p>
          you can read this document in{" "}
          {0.003 *
            text.split(" ").filter((ele) => {
              return ele.length !== 0;
            }).length}{" "}
          mins
        </p>
        <h3>preview:</h3>
        <p>{text.length > 0 ? text : "Nothing to preview..."}</p>
      </div>
    </>
  );
}
