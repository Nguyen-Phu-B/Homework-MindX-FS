import { useContext, useState } from "react";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
import TaskContext from "./TaskContext";

const TodoList = () => {
    const { tasks, setTasks, showDone } = useContext(TaskContext);

    const handleIconClick = (itemId) => {
        const dontTask = tasks.map((item) => (itemId == item.id ? { ...item, done: !item.done } : item));
        setTasks(dontTask);
        localStorage.setItem("tasks", JSON.stringify(dontTask));
    };

    const filterTask = !showDone ? tasks : tasks.filter((item) => !item.done);

    return (
        <div className="todo-list-container">
            {filterTask.map((item, index) => {
                return (
                    <>
                        {!item.done ? (
                            <div className="todo-item-container">
                                <FaRegCircle
                                    className="item-done-button"
                                    color="#9a9a9a"
                                    onClick={() => handleIconClick(item.id)}
                                />
                                <div className="item-title">{item.task}</div>
                            </div>
                        ) : (
                            <div className="todo-item-container done">
                                <FaRegCheckCircle
                                    className="item-done-button"
                                    color="#9a9a9a"
                                    onClick={() => handleIconClick(item.id)}
                                />
                                <div className="item-title">{item.task}</div>
                            </div>
                        )}
                    </>
                );
            })}
        </div>
    );
};

export default TodoList;
