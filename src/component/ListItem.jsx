import { useTaskContext } from "./TaskProvider.jsx";
import React from "react";

export default function ListItem({ task, isCompleted }) {
    const { completeHandler, uncompleteHandler } = useTaskContext();
    

    return (
        <div>
            <div>
                <p>{task.title}</p>
                {isCompleted && task.completedDate && (
                    <p>
                        Completed on:
                        {new Date(task.completedDate).toLocaleDateString()}
                    </p>
                )}
            </div>
            <button
                onClick={() =>
                    isCompleted
                        ? uncompleteHandler(task.id)
                        : completeHandler(task.id)
                        
                }
                // className={
                //     !isCompleted
                //         ? //css for complete button
                //         : //css for uncomplete button
                // }
            >
                {isCompleted ? "Undo" : "Complete"}
            </button>
        </div>
    );
}
