import React, { useState } from "react";
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


	const readTask = (e) => {
		setTasks(e.target.value)
	}

	console.log(task)

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
