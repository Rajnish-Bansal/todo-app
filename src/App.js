import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import List from "./components/List";

function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // // Load task list from local storage
  // function getStoredValue() {
  //   const storedList = JSON.parse(localStorage.getItem("taskList"));
  //   if (storedList) {
  //     return storedList;
  //   }
  // }

  // // Save the updated task list to local storage
  // useEffect(() => {
  //   localStorage.setItem("taskList", JSON.stringify(list));
  // }, [list]);

  return (
    <div className="main-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="input-container">
        <Input
          list={list}
          setList={setList}
          task={task}
          setTask={setTask}
          editIndex={editIndex}
          setEditIndex={setEditIndex}
        />
      </div>
      <div className="list-container">
        <List
          list={list}
          setList={setList}
          task={task}
          setTask={setTask}
          editIndex={editIndex}
          setEditIndex={setEditIndex}
        />
      </div>
    </div>
  );
}

export default App;
