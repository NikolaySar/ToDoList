import React, { Component } from "react";
import Task from "../Task";
import "./styles.scss";

class TaskList extends Component {
  render() {
    const { tasks, handleCheckboxChange, deleteTask } = this.props;

    return (
      <ul className="task-list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            handleCheckboxChange={handleCheckboxChange}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    );
  }
}

export default TaskList;
