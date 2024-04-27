import React, { Component } from "react";
import EditingTaskForm from "../EditingTaskForm";
import Task from "../Task";
import "./styles.scss";

class TaskList extends Component {
  render() {
    const {
      tasks,
      handleCheckboxChange,
      isChecked,
      deleteTask,
      updatedTask,
      idUpdatedTask,
      errorEditing,
      handleEditTask,
      handleInputChange,
      checkEditingValidation,
      cancelEditing,
    } = this.props;

    return (
      <ul className="tasks">
        {tasks.map((task) => (
          <div key={task.id} className="">
            {task.id === idUpdatedTask ? (
              <EditingTaskForm
                updatedTask={updatedTask}
                errorEditing={errorEditing}
                handleInputChange={handleInputChange}
                checkEditingValidation={checkEditingValidation}
                cancelEditing={cancelEditing}
              />
            ) : (
              <Task
                task={task}
                handleCheckboxChange={handleCheckboxChange}
                isChecked={isChecked}
                deleteTask={deleteTask}
                handleEditTask={handleEditTask}
              />
            )}
          </div>
        ))}
      </ul>
    );
  }
}

export default TaskList;
