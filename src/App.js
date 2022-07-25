import Task1 from "./Task1";
import Task2 from "./Task2";
import Home from "./Home";

import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

function App() {
  return (
    <>
      {console.log("path")}
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </>
  );
}

export default App;
