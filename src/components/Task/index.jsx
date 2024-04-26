import React, { Component } from "react";
import pen from "../../image/pen.svg";
import drawer from "../../image/drawer.svg";
import "./styles.scss";

class Task extends Component {
  render() {
    const { task, handleCheckboxChange, deleteTask } = this.props;

    return (
      <li className="task">
        <div className="task__group">
          <input
            type="checkbox"
            className="task__checkbox"
            checked={task.checked}
            name={task.name}
            onChange={() => handleCheckboxChange(task.id)}
          />
          <label htmlFor="" className="task__label">
            {task.name}
          </label>
        </div>
        <div onClick={() => deleteTask(task.id)} className="task__buttons">
          <button className="task__delete">
            <img src={drawer} alt="" />
          </button>
          <button className="task__edit">
            <img src={pen} alt="" />
          </button>
        </div>
      </li>
    );
  }
}

export default Task;
