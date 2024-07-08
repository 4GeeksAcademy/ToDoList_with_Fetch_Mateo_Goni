import React from "react";
import Delete from "./delete";


const Tasks = (props) => {
    return (
        <ul className="list-group">
            {props.taskList.map((element, index) => (
                <li key={index} className="list-group-item w-100">{element}<Delete /></li>
            ))}
        </ul>
        
    )
}

export default Tasks;