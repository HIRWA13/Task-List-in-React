import { useState } from "react"

export default function CustormForm(props) {
    const [task, setTast] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addTask({
           title: task,
           checked: false,
           id: Date.now()
        })
        setTast("")
    }
    return(
        <>
            <form 
                className="flex items-center gap-4 mt-2"
                onSubmit={handleSubmit}
                >
                <div className="wrapper w-3/4">
                    <input 
                        type="text" 
                        placeholder="Add your tasks"
                        value={task}
                        onInput={(e) => setTast(e.target.value)}
                        required
                        autoFocus
                        maxLength={60}
                        className="w-full p-3 rounded-md outline-none"
                        />
                </div>
                <button className="text-white bg-primary font-medium rounded-lg text-sm text-center py-3 px-3 cursor-pointer">Add Task</button>
            </form>
        </>
    );
}