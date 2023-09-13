import { useEffect, useState } from "react";
import TaskContext from "./TaskContext";

const GlobalState = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [count, setCount] = useState(0);
    const [showDone, setShowDone] = useState(false);

    useEffect(() => {
        const localStorageTask = localStorage.getItem("tasks");
        if (localStorageTask) {
            const parseTasks = JSON.parse(localStorageTask);
            setTasks(parseTasks);
        }
    }, []);

    useEffect(() => {
        const doneTasksCount = tasks.reduce((count, task) => {
            if (!task.done) {
                return count + 1;
            }
            return count;
        }, 0);

        setCount(doneTasksCount);
    }, [tasks]);

    return (
        <TaskContext.Provider value={{ tasks, setTasks, count, showDone, setShowDone }}>
            {children}
        </TaskContext.Provider>
    );
};

export default GlobalState;
