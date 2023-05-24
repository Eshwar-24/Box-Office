import React from "react";
import "./Styles/mainpage.css";
import { Link, useLocation } from "react-router-dom";

export default ({ children }) => {
  const { pathname } = useLocation();
  return (
    <div className="Main-container">
      <h1 className="heading">BOX OFFICE</h1>
      <p className="para">Are you looking for any Movie or Actor</p>
      <ul>
        <Link to="/" className={pathname === "/" ? "selected-page" : "Links"}>
          Home
        </Link>
        <Link
          to="/Actors"
          className={pathname === "/Actors" ? "selected-page" : "Links"}
        >
          Starred
        </Link>
      </ul>
      {children}
    </div>
  );
};
