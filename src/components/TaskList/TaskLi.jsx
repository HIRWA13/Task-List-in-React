import TaskItem from "./TaskItem";

export default function TaskLi (props) {
    return (
        <>
            <ul>
                {
                    props.tasks.map(task => {
                       return <TaskItem
                            key={task.id}
                            task={task}
                            deleteTask={props.deleteTask}
                        />
                    })
                }
            </ul>
        </>
    );
}