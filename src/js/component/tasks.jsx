import React from "react";
import Delete from "./delete";
import EditTask from "./editTask"
const Tasks = ({getUser, tasksList, setTasksList }) => {
  return (
    <ul className="list-group">
      {tasksList.map((element, index) => (
        <li key={index} className="list-group-item d-flex justify-content-between">
          {element.label}
          <div className="d-flex">
    
          <EditTask taskKey={element.id} checked={element.is_done} getUser={getUser}   />
      
          <Delete  taskKey={element.id} getUser={getUser} tasksList={tasksList}  />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
