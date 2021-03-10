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
      task: event.target.parentNode.childNodes[0].value,
      status: false,
    };
    items.push(newTask);
    setItem([...items]);
  };

  const addToTop = (event) => {
    const newTask = {
      task: event.target.parentNode.childNodes[0].value,
      status: false,
    };
    items.unshift(newTask);

    setItem((pervItem) => {
      let newItem = [...pervItem];
      return newItem;
    });
  };

  const checkBoxClicked = (e) => {
    items[e.target.id].status = e.target.checked;
    if (e.target.checked) {
      const checked = items.splice(e.target.id, 1);
      items.push(checked[0]);
    }
    setItem([...items]);

    if (e.target.checked) {
    }
  };

  const CreatList = () => {
    const result = Object.entries(items).map(List);
    return result;
  };

  const DeleteTask = (e) => {
    items.splice(e.target.id, 1);
    setItem([...items]);
  };
  const List = (item) => {
    return (
      <li key={item[0]}>
        <i className="fa fa-trash" onClick={DeleteTask} id={item[0]}></i>
        <input
          id={item[0]}
          type="checkbox"
          onChange={checkBoxClicked}
          checked={item[1].status}
        />
        <span>{item[1].task}</span>
      </li>
    );
  };

  return (
    <div>
      <input className="input" type="text" />
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
