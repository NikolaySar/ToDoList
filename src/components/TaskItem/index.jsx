import React, { Component } from "react";
import pen from "../../image/pen.svg";
import drawer from "../../image/drawer.svg";
import "./styles.scss";

class TaskItem extends Component {
  render() {
    const { task, handleCheckboxChange, deleteTask } = this.props;

    return (
      <li className="todo-item">
        <div className="todo-item__group">
          <input
            type="checkbox"
            className="todo-item__checkbox"
            checked={task.checked}
            name={task.name}
            onChange={() => handleCheckboxChange(task.id)}
          />
          <label htmlFor="" className="todo-item__label">
            {task.name}
          </label>
        </div>
        <div onClick={() => deleteTask(task.id)} className="todo-item__buttons">
          <button className="todo-item__delete">
            <img src={drawer} alt="" />
          </button>
          <button className="todo-item__edit">
            <img src={pen} alt="" />
          </button>
        </div>
      </li>
    );
  }
}

export default TaskItem;
