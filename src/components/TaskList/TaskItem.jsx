import { useState } from "react";

export default function TaskItem({task, deleteTask}) {
    const [isChecked, setIsChecked] = useState(task.isChecked)
    const isCheckedHandler = () => {
        setIsChecked(prev => !prev)
    }

    const styles = {
        textDecoration: isChecked ? "line-through" : "none"
    }
    return (
        <>
           <li 
                className="bg-white text-lg mt-2 p-2 flex items-center justify-between rounded-md">
                <div className="flex itemx-center gap-4">
                    <input type="checkbox"
                           onChange={isCheckedHandler}
                           checked={isChecked}
                           name="isChecked"

                    />
                    <label 
                        htmlFor="isChecked"
                        className="text-xl font-semibold"
                        style={styles}
                        >{task.title}</label>
                </div>
                <div>
                    <button 
                        className="bg-blue-600 text-white p-2 rounded-md"
                        onClick={() => deleteTask(task.id)}
                        >Delete Task</button>
                </div>
           </li>
        </>
    );
}