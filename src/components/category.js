import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import BusinessIcon from "@mui/icons-material/Business";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import BiotechIcon from "@mui/icons-material/Biotech";
import SportsIcon from "@mui/icons-material/Sports";
import PsychologyIcon from "@mui/icons-material/Psychology";

export class Category extends Component {
  render() {
    return (
      <div id="category_items">
        <hr id="hr_line2" />

        <a className="nav-item" id="cate_items">
          <Link className="nav-link" id="id_fora_collapse" to="/">
            <button id="category_btn">
              <HomeIcon id="category_icons" />
              Home
            </button>
          </Link>
        </a>
        <a className="nav-item" id="cate_items">
          <Link className="nav-link" id="id_fora_collapse" to="/top">
            <button id="category_btn">
              <NewspaperIcon id="category_icons" />
              General
            </button>
          </Link>
        </a>
        <a className="nav-item" id="cate_items">
          <Link className="nav-link" id="id_fora_collapse" to="/business">
            <button id="category_btn">
              <BusinessIcon id="category_icons" />
              Business
            </button>
          </Link>
        </a>
        <a className="nav-item" id="cate_items">
          <Link className="nav-link" id="id_fora_collapse" to="/entertainment">
            <button id="category_btn">
              <LiveTvIcon id="category_icons" />
              Entertainment
            </button>
          </Link>
        </a>
        <a className="nav-item" id="cate_items">
          <Link className="nav-link" id="id_fora_collapse" to="/health">
            <button id="category_btn">
              <HealthAndSafetyIcon id="category_icons" />
              Health
            </button>
          </Link>
        </a>
        <a className="nav-item" id="cate_items">
          <Link className="nav-link" id="id_fora_collapse" to="/science">
            <button id="category_btn">
              <BiotechIcon id="category_icons" />
              Science
            </button>
          </Link>
        </a>
        <a className="nav-item" id="cate_items">
          <Link className="nav-link" id="id_fora_collapse" to="/sports">
            <button id="category_btn">
              <SportsIcon id="category_icons" />
              Sports
            </button>
          </Link>
        </a>
        <a className="nav-item" id="cate_items">
          <Link className="nav-link" id="id_fora_collapse" to="/technology">
            <button id="category_btn">
              <PsychologyIcon id="category_icons" />
              Technology
            </button>
          </Link>
        </a>

        <hr id="hr_line" />
      </div>
    );
  }
}

export default Category;
