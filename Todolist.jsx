import  { useState } from "react";
import "./Todolist.css";

function Todolist() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");

    const addTask = () => {
        if (input.trim()) {
            setTasks([tasks, { text: input, completed: false }]);
            setInput("");
        }
    };

    const toggleTask = (index) => {
        const newTasks = tasks.map((task, i) =>
            i === index ? { task, completed: !task.completed } : task
        );
        setTasks(newTasks);
    };

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <div className="todo-container">
            <h1>To-Do List</h1>
            <div className="input-container">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Add a task..."
                />
                <button onClick={addTask}>Add</button>
            </div>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} className={task.completed ? "completed" : ""}>
                        <span onClick={() => toggleTask(index)}>{task.text}</span>
                        <button onClick={() => deleteTask(index)}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todolist;
