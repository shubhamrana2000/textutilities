import React from "react";
import PropTypes from "prop-types";
// import {Link} from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`}
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
              <a className="nav-link primary" aria-current="page" href="/">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link primary" href="About">
                About
              </a>
            </li> */}
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>{" "} */}
          <div
            className={`form-check form-switch text-${
              props.Mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              type="checkbox"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
              className="form-check-input"
            />
            <label
              htmlFor="flexSwitchCheckDefault"
              className="form-check-label"
            >
              Enable Dark Mode
            </label>
          </div>
          {/* <div className="themechanger"style={{textalign:'center'}}>
            <button class="dot1" style={{height:'35px' , width:'35px' , backgroundColor: '#e6eaf0',borderRadius:'50%', border:'none', padding:'2px' , margin:'1px'}} onClick={changeColor}></button>
            <button class="dot2" style={{height:'35px' , width:'35px' , backgroundColor: '#2e2c2c',borderRadius:'50%', border:'none', padding:'2px' , margin:'1px'}} onClick={changeColor}></button>
            <button class="dot3" style={{height:'35px' , width:'35px' , backgroundColor: '#edea39',borderRadius:'50%', border:'none', padding:'2px' , margin:'1px'}} onClick={changeColor}></button>
            <button class="dot4" style={{height:'35px' , width:'35px' , backgroundColor: '#f71e1e',borderRadius:'50%', border:'none', padding:'2px' , margin:'1px'}} onClick={changeColor}></button>
            <button class="dot5" style={{height:'35px' , width:'35px' , backgroundColor: '#29f036',borderRadius:'50%', border:'none', padding:'2px' , margin:'1px'}} onClick={changeColor}></button>
          </div> */}
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  AboutUs: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Set Title Here",
  AboutUs: "About Text Here",
};
