import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Task1 from "./Task1";
import Task2 from "./Task2";
import hamburger from "./hamburger.jpg";
import "./Home.css";

export default function Home() {
  const showFunction = () => {
    document.getElementById("myDropdown").classList.toggle("show");
  };

  // Close the dropdown if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
  return (
    <div className="container">
      <div className="nav ">
        <div
          style={{ width: "50px", height: "50px" }}
          className="hamburger dropdown mobile-view">
          <button className="drop-btn" onClick={showFunction}>
            <img width="100%" src={hamburger}></img>
          </button>
          <div id="myDropdown" class="dropdown-content">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <span
          style={{ display: "flex", fontSize: "1.5rem" }}
          className="nav-heading">
          &emsp;InnerHour
        </span>
      </div>
      <div className="grid-container">
        <div className="side-bar ">
          <button value="task1" className="btn">
            <Link
              style={{ textDecoration: "none", color: "red" }}
              to={"/Task1"}>
              Task1
            </Link>
          </button>
          <br></br>
          <button value="task2">
            <Link
              style={{ textDecoration: "none", color: "red" }}
              to={"/Task2"}>
              Task2
            </Link>
          </button>
        </div>
        <div>
          <Routes>
            <Route path="/Task1" element={<Task1 />} />
            <Route path="/Task2" element={<Task2 />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
