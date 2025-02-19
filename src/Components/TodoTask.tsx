import React from "react";
import { ITask } from "../Interfaces";
import tick from "../assets/tick.png";

interface Props {
  task: ITask;
  deleteTask(taskNameToDelete: string): void;
  completeTask(taskNameToComplete: string): void;
}

const TodoTask: React.FC<Props> = ({ task, deleteTask, completeTask }) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
        <span>{task.deadline}</span>
        {task.completed && <img src={tick} alt="Completed" />}
      </div>
      <div className="buttons">
        <button onClick={() => deleteTask(task.taskName)}>Remove</button>
        {!task.completed && (
          <button onClick={() => completeTask(task.taskName)}>Done</button>
        )}
      </div>
    </div>
  );
};

export default TodoTask;
