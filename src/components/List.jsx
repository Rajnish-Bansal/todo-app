import React from "react";
import "./list.css";

function List(props) {
  const handleDeleteItem = (index) => {
    const updatedList = [...props.list];
    updatedList.splice(index, 1);
    props.setList(updatedList);
  };

  const handleEdititem = (index) => {
    props.setTask(props.list[index])
    props.setEditIndex(index)
  };

  return (
    <div>
      {props.list.map((item, index) => (
        <div key={index} className="task-div">
          <div className="index-div">{index + 1}.</div>
          <div className="task-text-div">{item}</div>
          <div className="task-buttons">
            <button className="edit" onClick={() => handleEdititem(index)}>
              Edit
            </button>
            <button className="delete" onClick={() => handleDeleteItem(index)}>
              X
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
