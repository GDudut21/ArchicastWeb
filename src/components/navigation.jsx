import React from "react";


export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top" style={{ display: "flex", alignItems: "center" }}>
           < img
              src="img/archicastlogo.png"
              alt="Logo"
              style={{ height: "70px", marginRight: "8px" }}
            />
             <span style={{ fontWeight: "bold", fontSize: "20px" }}>ARCHICAST</span>
          </a>
        </div>
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Services
              </a>
            </li>
            <li>
              <a href="#projects" className="page-scroll">
                Projects
              </a>
            </li>
            <li>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
