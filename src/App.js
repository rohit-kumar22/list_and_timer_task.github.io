import "./App.css";
import Task1 from "./Task1";

function App() {
  return (
    <div className="container">
      <div className="nav">
        <span>InnerHour</span>
      </div>
      <div className="grid-container">
        <div className="side-bar">
          <button value="task1" className="btn">
            <span>Task1</span>
          </button>
          <br></br>
          <button value="task1">
            <span>Task2</span>
          </button>
        </div>
        <div>
          <Task1 />
        </div>
      </div>
    </div>
  );
}

export default App;
