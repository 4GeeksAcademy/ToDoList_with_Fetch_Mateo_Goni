import React, { useState, useEffect } from "react";
import Tasks from "./tasks";
import EditTask from "./editTask"
//create your first component


const ToDoList = () => {


	const [tasksList, setTasksList] = useState([])
	const [task, setTasks] = useState('')


	const addTasks = (e) => {
		if (e.key === 'Enter' && task !== '') {
			//setTasksList([...tasksList, task])
			addTasksToList()
			setTasks('')
		}
	}


	const addTasksToList = () =>{
		fetch('https://playground.4geeks.com/todo/todos/mateo1627',{
         method:'POST',
		 body: JSON.stringify({
          label:task,
		  is_done:false
		 }),
		 headers:{
		"Content-Type": "application/json"
		 }
		}).then((response) =>{
			if(response.status ===201){
			//	getUser()
			return response.json()
			}
			return false;
		})
		.then((data) => {
			if(data){
				setTasksList(tasksList.concat(data))
			}
		})
	    .catch((error) => (error))
	}   
	console.log(tasksList)






//Connection with the todo API
 const createUser = () =>{
 fetch('https://playground.4geeks.com/todo/users/mateo1627', {
 method:'POST',
headers: {
	"Content-Type": "application/json"
}
 })
   .then((response) =>{
    if(response.status === 201){
		getUser()
	}
   
   return response.json()
})
   .then((data) => console.log(data))
   .catch(error => console.log(error))
 }
	const readTask = (e) => {
		setTasks(e.target.value)
	}

	console.log(task)

  //Getting the user
	
  const	getUser = () =>{
		fetch('https://playground.4geeks.com/todo/users/mateo1627')
		
	
		  .then((response) => {
			if(response.status === 404) {
			createUser();
		}return response.json()})
		
		  .then((data) => setTasksList(data.todos))
		  .catch((error) => console.log(error))
		  
		
		}
    //     const delete = () => {
	// 		fetch('https://playground.4geeks.com/todo/users/mateo1627', {
	//         method:'DELETE'
	// 		})
	// }
 
	useEffect(() => {  
	   // createUser()
		getUser()
	    //deleteInfo()
	}
	, []);
	return (

		<div className="container col-6 mt-5">
			<h1 className="display-1 text-secondary">ToDoList</h1>
			<input className="form-control mb-1" type="text" placeholder="Add tasks" onChange={readTask} onKeyDown={addTasks} value={task} />
			<Tasks tasksList={tasksList} setTasksList={setTasksList} getUser={getUser}/>
			<div className="items-left">
				{tasksList.length} item{tasksList.length !== 1 ? 's' : ''} left
			</div>
		
		</div>

	);
};

export default ToDoList;
