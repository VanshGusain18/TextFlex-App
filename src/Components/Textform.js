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

  const handleClClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("cleared", "success");
  };

  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h1>{props.headline}</h1>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="10"
            value={text}
            onChange={handleChange}
            style={{
              backgroundColor: props.mode === "dark" ? "black" : "white",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Upperclass
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClClick}>
          Clear
        </button>
      </div>

      <div className="divcontainer my-2">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words {text.length} characters
        </p>
        <p>
          you can read this document in {0.003 * text.split(" ").length} mins
        </p>
        <h3>preview:</h3>
        <p>
          {text.length > 0 ? text : "Enter text in above box to preview it"}
        </p>
      </div>
    </>
  );
}
