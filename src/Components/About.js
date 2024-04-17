import React from "react";

export default function About(props) {
  const myStyle = {
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
  };

  return (
    <div className="container my-3" style={myStyle}>
      <h2 style={myStyle}>About Us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <strong>Case Manipulation Tools</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextFlex simplifies the process of adjusting the case of text
              strings with its intuitive tools. Users can effortlessly convert
              text to uppercase, lowercase, or capitalize the first letter of
              each word. This feature streamlines tasks such as standardizing
              text formatting or preparing content for publication.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <strong>Text Transformation Functions</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample "
          >
            <div className="accordion-body" style={myStyle}>
              TextFlex offers a selection of functions designed to transform
              text in various ways. Users can utilize functions such as text
              reversal, text duplication, or text inversion to manipulate their
              strings creatively. These functions provide users with the ability
              to experiment with their text and generate unique variations
              efficiently.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <strong>Clipboard Integration</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Enhancing user convenience, TextFlex seamlessly integrates with
              the clipboard functionality of the device. Users can easily copy
              their manipulated text to the clipboard for swift pasting into
              other applications or documents. This feature promotes a smooth
              workflow, allowing users to transfer their edited text seamlessly
              across different platforms and contexts.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
