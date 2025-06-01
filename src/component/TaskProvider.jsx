import React, { useState, useEffect, createContext, useContext } from "react";

export const TasksContext = createContext();

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([]);
    const [loading,setLoading] = useState(false);



    useEffect(() => {
        async function fetchTasks() {
            try {
                setLoading(true)
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/todos"
                );
                const data = await response.json();
                const tasksWithDates = data.map((task) => ({
                    ...task,
                    completedDate: task.completed ? new Date() : null,
                }));
                setTasks(tasksWithDates);
            } catch (error) {
                console.log(error);
            }finally{
                setLoading(false);
            }
        }
        fetchTasks();
    }, []);

    const completedTasks = tasks.filter(
        (task) =>
            task && typeof task.completed !== "undefined" && task.completed
    );
    const uncompletedTasks = tasks.filter(
        (task) =>
            task && typeof task.completed !== "undefined" && !task.completed
    );
    


   

    function completeHandler(id) {
        setTasks((prevTasks) =>
            prevTasks.map((task) => {
                if (!task) return null;
                if (task.id === id) {
                    return {
                        ...task,
                        completed: true,
                        completedDate: new Date(),
                    };
                } else {
                    return task;
                }
            })
        );
    }

    function uncompleteHandler(id) {
        setTasks((prevTasks) =>
            prevTasks.map((task) => {
                if (!task) return null;
                if (task.id === id) {
                    return {
                        ...task,
                        completed: false,
                        completedDate: null,
                    };
                } else {
                    return task;
                }
            })
        );
    }

    const value = {
        completeHandler,
        uncompleteHandler,
        completedTasks,
        uncompletedTasks,
        loading
    };

    return (
        <TasksContext.Provider value={value}> {children} </TasksContext.Provider>
    );
}

export function useTaskContext() {
    const context = useContext(TasksContext);
    if (!context) {
        throw new Error("useTaskContext must be used within a TaskProvider");
    }
    return context;
}
