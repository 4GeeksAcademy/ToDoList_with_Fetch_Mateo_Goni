import React from "react";
import Delete from "./delete";

const Tasks = ({getUser, tasksList, setTasksList }) => {
  return (
    <ul className="list-group">
      {tasksList.map((element, index) => (
        <li key={index} className="list-group-item d-flex justify-content-between">
          {element.label}
          <Delete taskKey={element.id} getUser={getUser} tasksList={tasksList} setTasksList={setTasksList} />
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
