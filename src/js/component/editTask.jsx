import React,{useState, useEffect} from "react";

const EditTask = ({taskKey, taskss,  getUser, checked}) => {
   
	const [task, setTasks] = useState(false)
    const isDone = () => {
        setTasks(!task)
      
    }
    const Edit = () =>{
        fetch(`https://playground.4geeks.com/todo/todos/${taskKey}`,{
            method:'PUT',
            body: JSON.stringify({
               label:taskss,
               is_done:task
              }),
              headers:{
             "Content-Type": "application/json"
              }
           })
           .then((response) => {
            if(response === 200){
                getUser()
            }
           })
       }
       useEffect(()=>{
        setTasks(checked)
        },[])
       useEffect(()=>{
       Edit()
       },[task])
    
       return(
        <span role="button" id={`check-${taskKey}`} onClick={isDone} > {task ? "✅":"✔️"}</span>
    )
    }


export default EditTask;