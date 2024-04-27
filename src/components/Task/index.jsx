import React, { Component } from "react";
import pen from "../../image/pen.svg";
import drawer from "../../image/drawer.svg";
import "./styles.scss";

class Task extends Component {
  render() {
    const { task, handleCheckboxChange, deleteTask, handleEditTask } =
      this.props;

    return (
      <li className="task">
        <div className="task__group">
          <input
            type="checkbox"
            className="task__checkbox"
            checked={task.checked}
            name={task.name}
            id={task.id}
            onChange={() => handleCheckboxChange(task.id)}
          />
          <p className="task__name">{task.name}</p>
        </div>
        <div className="task__buttons">
          <button onClick={() => deleteTask(task.id)} className="task__delete">
            <img src={drawer} alt="" />
          </button>
          <button
            onClick={() => handleEditTask(task.id)}
            className="task__edit"
          >
            <img src={pen} alt="" />
          </button>
        </div>
      </li>
    );
  }
}

export default Task;
