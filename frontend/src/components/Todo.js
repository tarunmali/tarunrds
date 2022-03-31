import React, {useState, useEffect}  from 'react';
import Header from './Header';
function Todo(){

    const [todos, setTodos] = useState(["buy milk", "buy eggs", "buy bread"]);
    const [task, setTask] = useState("");

    function createToDo(){
        setTodos(tarun=>{
            setTask("");
            return [...tarun, task]});
    }
    return (
    <div>
    <Header active="Todo"/>
    
    <div className="container">
        <h1>Todo (at present not connected to database)</h1>
        <h1>{task}</h1>
        <input type="text" placeholder="Enter your todo" value ={task} 
        onChange={event=>{setTask(event.target.value)}}/>
        <button onClick={createToDo}>Enter to do</button>
        
        <ul>
            {todos.map(todo => {
                return <li>{todo}</li>
            })}
        </ul>
    </div>
    </div>)
}

export default Todo;