import { useTaskContext } from "./TaskProvider.jsx";
import "./ListItem.Module.css"
import React from "react";

export default function ListItem({ task, isCompleted }) {
    const { completeHandler, uncompleteHandler } = useTaskContext();
    

    return (
        <div className="item-container1">
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
                className={
                    !isCompleted
                        ?  'complete-button'
                        : 'undo-button'
                }
            >
                {isCompleted ? "Undo" : "Complete"}
            </button>
        </div>
    );
}
