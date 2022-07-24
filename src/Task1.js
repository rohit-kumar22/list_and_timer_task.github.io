import React, { useState } from "react";
import "./Task1.css";

export default function Task1() {
  const [list1, setList1] = useState([]);
  const [list2, setList2] = useState([]);
  const [unionList, setUnionList] = useState([]);
  const [uniqueList, setUniqueList] = useState([]);
  const [userInput1, setUserInput1] = useState();
  const [userInput2, setUserInput2] = useState();

  const inputList1 = () => {};

  const inputList2 = () => {};
  const filterList = () => {
    setUnionList([...new Set([...list1, ...list2])]);

    setUniqueList(
      [...new Set(list1)].filter((element) => new Set(list2).has(element))
    );
  };

  return (
    <div className="task-bar">
      <div className="task-heading">Task 1</div>
      <div className="list-container">
        {console.log("userInput1", userInput1)}
        <input // first input
          name="listOne"
          type="text"
          id="listOne"
          placeholder="Enter element"
          onChange={(e) => setUserInput1(e.target.value)}
        />

        <button
          onClick={() => {
            setList1((prev) => [...prev, userInput1]);
            setUserInput1();
          }}>
          Add Item
        </button>

        <input // second Input
          name="listOne"
          type="text"
          id="listTwo"
          placeholder="Enter element"
          style={{ marginLeft: "50px" }}
          onChange={(e) => setUserInput2(e.target.value)}
        />
        <button
          onClick={() => {
            setList2((prev) => [...prev, userInput2]);
            setUserInput2();
          }}>
          Add Item
        </button>
      </div>
      <div className="compute-button">
        <button
          type="submit"
          style={{
            width: "25rem",
            height: "5rem",
            backgroundColor: "brown",
            fontSize: "3rem",
          }}
          onClick={() => filterList()}>
          Compute
        </button>
      </div>
      <div className="list-data">
        <div className="list1-data">
          <h4 style={{ backgroundColor: "rgb(0,139,220)" }}>Set A</h4>
          <ul>
            {list1.map((item) => {
              {
                console.log(item);
              }
              return <li>{item}</li>;
            })}
          </ul>
        </div>
        <div className="list2-data">
          <h4 style={{ backgroundColor: "rgb(0,139,220)" }}>Set B</h4>
          <ul>
            {list2.map((data) => {
              {
                console.log(data);
              }
              return <li>{data}</li>;
            })}
          </ul>
        </div>
        <div className="combination">
          <h4 style={{ backgroundColor: "rgb(0,139,220)" }}>Set A∪B</h4>
          {unionList.map((item) => (
            <p>{item}</p>
          ))}
        </div>

        <div className="intersection">
          <h4 style={{ backgroundColor: "rgb(0,139,220)" }}>Set A∩B</h4>
          {uniqueList.map((item) => (
            <p>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
