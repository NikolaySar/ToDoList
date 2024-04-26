import React, { Component } from "react";
import TaskItem from "../TaskItem";
import "./styles.scss";

class TaskList extends Component {
  render() {
    const { tasks, handleCheckboxChange, deleteTask } = this.props;

    return (
      <ul className="task-list">
        {tasks.map((task) => (
          <TaskItem
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
