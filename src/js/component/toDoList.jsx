import React, { useState, useEffect } from "react";
import Tasks from "./tasks";
//create your first component


const ToDoList = () => {


	const [tasksList, setTasksList] = useState([])
	const [task, setTasks] = useState('')
	

	const addTasks = (e) => {
		if (e.key === 'Enter' && task !== '') {
			setTasksList([...tasksList, task])
			setTasks('')
		}
	}

	console.log(tasksList)
//Connection with the todo API
// const createUser = () =>{
// fetch('https://playground.4geeks.com/todo/users/mateo1627', {
// method:'POST',

// })
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch(error => console.log(error))
  

// }


	const readTask = (e) => {
		setTasks(e.target.value)
	}

	console.log(task)

	const	getUser = () =>{
		fetch('https://playground.4geeks.com/todo/users/mateo1627', {
		
		})
		  .then((response) => response.json())
		  .then((data) => console.log(data.todos))
		  .catch((error) => console.log(error))
		  
		
		}
   //Getting the user
	useEffect(() => {  
	
		getUser()
	}
	, []);
	return (

		<div className="container col-6 mt-5">
			<h1 className="display-1 text-secondary">ToDoList</h1>
			<input className="form-control mb-1" type="text" placeholder="Add tasks" onChange={readTask} onKeyDown={addTasks} value={task} />
			<Tasks tasksList={tasksList} setTasksList={setTasksList} />
			<div className="items-left">
				{tasksList.length} item{tasksList.length !== 1 ? 's' : ''} left
			</div>
		</div>

	);
};

export default ToDoList;
