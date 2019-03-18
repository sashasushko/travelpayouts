import * as React from "react";
import logo from "../../assets/logo.svg";
import "./Nav.css";

function Nav() {
  return (
    <nav className="nav">
      <a href="#" className="logo">
        <img src={logo} />
      </a>
      {new Array(10).fill().map((v, i) => (
        <a key={i} href="#" className={`nav-item ${i == 6 ? `active` : ``}`} />
      ))}
    </nav>
  );
}

export { Nav as default };
