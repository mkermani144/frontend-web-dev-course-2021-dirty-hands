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

  const DeleteTask = (e, index) => {
    items.splice(index, 1);
    setItem([...items]);
  };

  const [inputValue, setinputValue] = useState(0);
  const InputValue = (e) => {
    setinputValue(e.target.value);
  };

  const CreatList = () => {
    const result = Object.entries(items).map((item) => (
      <List
        id={item[0]}
        delete={(e) => DeleteTask(e, item[0])}
        checkBoxClicked={(e, id) => checkBoxClicked(e, id)}
        status={item[1].status}
        task={item[1].task}
      />
    ));
    return result;
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

const List = (item) => {
  return (
    <li key={item.id}>
      <i
        className="fa fa-trash"
        onClick={(e) => item.delete(e, item.id)}
        id={item.id}
      ></i>
      <input
        id={item.id}
        type="checkbox"
        onChange={(e) => item.checkBoxClicked(e, item.id)}
        checked={item.status}
      />
      <span>{item.task}</span>
    </li>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
