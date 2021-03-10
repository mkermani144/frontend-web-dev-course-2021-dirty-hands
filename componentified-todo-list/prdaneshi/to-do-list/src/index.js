import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App = () => {
  let [items, setItem] = useState([
    { task: "first element", status: false },
    { task: "second element", status: true },
    { task: "third element", status: false },
  ]);

  const addToBotton = (event) => {
    const newTask = {
      task: inputValue,
      status: false,
    };

    setItem([...items, newTask]);
  };

  const addToTop = (event) => {
    const newTask = {
      task: inputValue,
      status: false,
    };

    setItem([newTask, ...items]);
  };

  const checkBoxClicked = (e, index) => {
    console.log(index);
    items[index].status = e.target.checked;
    if (e.target.checked) {
      const checked = items.splice(index, 1);
      items.push(checked[0]);
    }
    setItem([...items]);
  };

  const CreatList = () => {
    const result = Object.entries(items).map(List);
    return result;
  };

  const DeleteTask = (e, index) => {
    items.splice(index, 1);
    setItem([...items]);
  };
  const List = (item) => {
    return (
      <li key={item[0]}>
        <i
          className="fa fa-trash"
          onClick={(e) => DeleteTask(e, item[0])}
          id={item[0]}
        ></i>
        <input
          id={item[0]}
          type="checkbox"
          onChange={(e) => checkBoxClicked(e, item[0])}
          checked={item[1].status}
        />
        <span>{item[1].task}</span>
      </li>
    );
  };
  const [inputValue, setinputValue] = useState(0);
  const InputValue = (e) => {
    setinputValue(e.target.value);
  };

  return (
    <div>
      <input className="input" type="text" onChange={InputValue} />
      <button onClick={addToBotton}> add to bottom</button>
      <button onClick={addToTop}> add to top</button>
      <ul>{CreatList()} </ul>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
