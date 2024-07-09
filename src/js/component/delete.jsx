import React from "react";

const Delete = ({taskKey, tasksList, setTasksList}) => {
console.log({taskKey, tasksList, setTasksList})
const eliminar = () =>{
const newTasksList = tasksList.filter((_,index)=> index !== taskKey)
setTasksList(newTasksList)

}
    return(
        <span onClick={eliminar}>❌</span>
    )
}

export default Delete;