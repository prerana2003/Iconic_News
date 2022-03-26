import "../App.css";
import React from "react";
import { Link } from "react-router-dom";
import HamburgerDrawer from "./HamburgerDrawer";

export default function NavBar() {
  return (
    <>
      <nav
        className="navbar  navbar-expand-md bg-dark navbar-dark "
        id="navbar__boot__sec__2"
      >
        <div className="HamburgerDrawer">
          <HamburgerDrawer />
        </div>
        <Link className="nav-link" id="logo__link__tea" to="/">
          <img
            src={require("../components/images/newsLOGO.png")}
            alt="logo"
            id="logo"
          />
        </Link>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item" id="collapse__items__3">
              <Link className="nav-link" id="id__for__a__collapse" to="/">
                HOME
              </Link>
            </li>
            <li className="nav-item" id="collapse__items__3">
              <Link
                className="nav-link"
                id="id__for__a__collapse"
                to="/business"
              >
                BUSINESS
              </Link>
            </li>
            <li className="nav-item" id="collapse__items__3">
              <Link
                className="nav-link"
                id="id__for__a__collapse"
                to="/entertainment"
              >
                ENTERTAINMENT
              </Link>
            </li>
            <li className="nav-item" id="collapse__items__3">
              <Link className="nav-link" id="id__for__a__collapse" to="/top">
                GENERAL
              </Link>
            </li>
            <li className="nav-item" id="collapse__items__3">
              <Link className="nav-link" id="id__for__a__collapse" to="/health">
                HEALTH
              </Link>
            </li>
            <li className="nav-item" id="collapse__items__3">
              <Link
                className="nav-link"
                id="id__for__a__collapse"
                to="/science"
              >
                SCIENCE
              </Link>
            </li>
            <li className="nav-item" id="collapse__items__3">
              <Link className="nav-link" id="id__for__a__collapse" to="/sports">
                SPORTS
              </Link>
            </li>
            <li className="nav-item" id="collapse__items__3">
              <Link
                className="nav-link"
                id="id__for__a__collapse"
                to="/technology"
              >
                TECHNOLOGY
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
