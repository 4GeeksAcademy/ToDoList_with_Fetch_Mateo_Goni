import React, { useState } from "react";
import Tasks from "./tasks";
//create your first component


const ToDoList = () => {


	const [tasksList, setTasksList] = useState([])
	const [task, setTasks] = useState('')


	const addTasks = (e) => {
		if (e.key === 'Enter' && task !== '') {
			setTasksList([...tasksList, task])
		}
	}

	console.log(tasksList)


	const readTask = (e) => {
		setTasks(e.target.value)
	}

	console.log(task)

	return (
		<div className="container col-6 mt-5">
			<input className="form-control mb-1" type="text" placeholder="Add tasks" onChange={readTask} onKeyDown={addTasks} value={task} />
			<Tasks taskList={tasksList} />
		</div>
	);
};

export default ToDoList;
