import React from "react";
import "./input.css";

function Input(props) {
  const handleAddButton = () => {
    if (props.editIndex === null) {
      //Adding a new Task
      if (props.task.trim() !== "") {
        const updatedList = [...props.list, props.task];
        props.setList(updatedList);
        props.setTask("");
      }
    } else {
      // Updating an existing task
      if (props.task.trim() !== "") {
        const updatedList = [...props.list];
        updatedList[props.editIndex] = props.task;
        props.setList(updatedList);
        props.setTask("");
        // Reset editIndex after updating
        props.setEditIndex(null);
      }
    }
  };

  return (
    <div className="input-div">
      <input
        type="text"
        placeholder="Enter Task"
        value={props.task}
        onChange={(e) => props.setTask(e.target.value)}
      ></input>
      <button className="add-button" onClick={handleAddButton}>
        {props.editIndex !== null ? "Update" : "Add"}
      </button>
    </div>
  );
}

export default Input;
