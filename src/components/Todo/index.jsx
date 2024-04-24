import React from "react";
import {
  CheckCircleIcon,
  TrashIcon,
  PencilIcon,
  CheckIcon,
} from "@heroicons/react/24/solid";
const Todo = ({ toDo, markDone, deleteTask, updateData }) => {
  return (
    <div>
      {toDo &&
        toDo
          .sort((a, b) => a - b)
          .map((task, index) => {
            return (
              <React.Fragment key={task.id}>
                <div className="todo">
                  <div className={task.status ? "done" : ""}>
                    <span>{index + 1}.</span>
                    <span>{task.title}</span>
                  </div>
                  <div className="todo__icons">
                    <span
                      title="Complited/ No complited"
                      onClick={() => markDone(task.id)}
                    >
                      {task.status ? (
                        <CheckCircleIcon style={{ width: 20, height: 20 }} />
                      ) : (
                        <CheckIcon style={{ width: 20, height: 20 }} />
                      )}
                    </span>

                    {task.status ? null : (
                      <span title="Edit" onClick={() => updateData()}>
                        <PencilIcon style={{ width: 20, height: 20 }} />
                      </span>
                    )}
                    <span title="Delete" onClick={() => deleteTask(task.id)}>
                      <TrashIcon style={{ width: 20, height: 20 }} />
                    </span>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
    </div>
  );
};

export default Todo;
