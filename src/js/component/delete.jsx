import React from "react";

const Delete = ({taskKey, getUser}) => {
    console.log(taskKey)
const eliminar = () =>{
//const newTasksList = tasksList.filter((_,index)=> index !== taskKey)

fetch(`https://playground.4geeks.com/todo/todos/${taskKey}`, {
	     method:'DELETE'
 		})
     .then((response) =>{
        console.log(response.status)
       if(response.status === 201 || response.status === 204){
       
       getUser()
       }

   
     })

}
    return(
        <span  onClick={eliminar}>❌</span>
    )
}

export default Delete;