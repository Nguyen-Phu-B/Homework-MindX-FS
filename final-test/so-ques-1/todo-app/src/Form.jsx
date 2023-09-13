import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import TaskContext from "./TaskContext";
import { v4 as uuidv4 } from "uuid";

const Form = () => {
    const { tasks, setTasks } = useContext(TaskContext);

    const formik = useFormik({
        initialValues: {
            id: 0,
            task: "",
            done: false,
        },
        onSubmit: (values, { resetForm }) => {
            if (values.task.trim() != "") {
                values.id = uuidv4();

                const newTask = [...tasks, values];

                setTasks(newTask);

                localStorage.setItem("tasks", JSON.stringify(newTask));

                resetForm();
            } else {
                resetForm();
            }
        },
    });

    const { handleSubmit, handleChange, values } = formik;

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input id="task" onChange={handleChange} value={values.task} placeholder="Enter task ..." />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
