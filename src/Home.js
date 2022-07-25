import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Task1 from "./Task1";
import Task2 from "./Task2";
import hamburger from "./hamburger.jpg";
import "./Home.css";

export default function Home() {
  return (
    <div className="container">
      <div className="nav ">
        <div style={{ width: "50px", height: "50px", display: "none" }}>
          <img width="100%" src={hamburger}></img>
        </div>

        <span style={{ display: "flex", fontSize: "1.5rem" }}>
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
