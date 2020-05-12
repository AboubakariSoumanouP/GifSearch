import React from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <ul className="navbar">
      <li onClick={(e) => props.changePage("About")}>
        <Link  id="about-nav-link" to="/about">
          About
        </Link>
      </li>
      <li onClick={(e) => props.changePage("Search")}>
        <Link className="active-page" id="project-nav-link" to="/search">
          Search
        </Link>
      </li>
    </ul>
  );
}

export default NavBar;