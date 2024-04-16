import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  let navbarTextColor = "";

  if (
    props.mode === "dark" ||
    props.mode === "danger" ||
    props.mode === "success"
  ) {
    navbarTextColor = "dark";
  }

  if (props.mode === "light" || props.mode === "warning") {
    navbarTextColor = "light";
  }

  return (
    <div>
      <nav
        // className={navbar navbar-expand-lg navbar text-${props.mode} bg-${props.mode}}
        className={`navbar navbar-expand-lg navbar-${navbarTextColor} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  {props.about}
                </a>
              </li>
            </ul>

            <div
              className="btn-group"
              role="group"
              aria-label="Basic mixed styles example"
            >
              <button
                type="button"
                className="btn btn-danger"
                onClick={props.handleRed}
              >
                Red
              </button>
              <button
                type="button"
                className="btn btn-warning"
                onClick={props.handleYellow}
              >
                Yellow
              </button>
              <button
                type="button"
                className="btn btn-success"
                onClick={props.handleGreen}
              >
                Green
              </button>
              <button
                type="button"
                className="btn btn-light"
                onClick={props.handleLight}
              >
                Light
              </button>
              <button
                type="button"
                className="btn btn-dark"
                onClick={props.handleDark}
              >
                dark
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.prototype = {
  title: PropTypes.string,
  about: PropTypes.string,
};

Navbar.defaultProps = {
  title: "title section",
  about: "about section",
};
