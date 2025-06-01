import React from "react";
import { useTaskContext } from "./TaskProvider.jsx";
import ListItem from "./ListItem.jsx";
import "./MainPage.css"
export default function MainPage({ children }) {
    const {
        completedTasks,
        uncompletedTasks,
        loading
    } = useTaskContext();

    const isCompleted = children.includes("Completed");
    const tasks = isCompleted ? completedTasks : uncompletedTasks;
    
    

    return (
        <div className="maincontainer">
            <h2 >{children}</h2>


            {loading ? (
                <div>
                    <p>Loading...</p>
                </div>
            ) : (
                <div >
                    {tasks.length > 0 ? (
                        tasks.map((task) => {
                            return (
                                <ListItem
                                    key={task.id}
                                    task={task}
                                    isCompleted={isCompleted}
                                />
                            );
                        })
                    ) : (
                        <p >nothing found</p>
                    )}
                </div>
            )}
            
        </div>
    );
}
