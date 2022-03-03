import react from "react";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/nav.css";

export const Nav = () => {
  return (
    <div>
      <ul className="ul">
        <li className="li">
          {" "}
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li className="li">
          {" "}
          <Link className="link" to="about">
            About
          </Link>
        </li>
        <li className="li">
          {" "}
          {/* <Link className="link" to="work">
            Work
          </Link> */}
        </li>
        <li className="li">
          {" "}
          <Link className="link" to="contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};
