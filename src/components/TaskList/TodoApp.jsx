import { useState } from "react";
import CustormForm from "./CustomForm";
import TaskLi from "./TaskLi";


export default function TodoApp() {
    const [tasks, setTasks] = useState([]) //the moment the app runs , the tasks will be set to nothing because it is an empty array at the begining

    const addTask = (task) => {
        setTasks(prevState => [task, ...prevState])
        console.log(tasks)
    }
    const deleteTask = (id) => {
        setTasks(prevState => prevState.filter(t => t.id !== id))
    }
    return (
        <>
            <div className="w-2/4 mx-auto mt-20">
                <header>
                    <h1 className="text-xl font-semibold mt-3">My tasklist</h1>
                </header>
                <CustormForm addTask={addTask}/>
                {tasks && <TaskLi tasks={tasks}
                                  deleteTask={deleteTask}
                                    />}
            </div>
        </>
    );
}