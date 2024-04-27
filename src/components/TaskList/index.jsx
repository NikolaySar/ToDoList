import { Component } from "react";
import EditingTaskForm from "../EditingTaskForm";
import Task from "../Task";
import "./styles.scss";

class TaskList extends Component {
  render() {
    const {
      tasks,
      handleCheckboxChange,
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
      <ul className="task-list">
        {tasks
          .slice()
          .sort((a, b) => (a.checked > b.checked ? 1 : -1))
          .map((task) => (
            <div key={task.id} className="task-list__inner">
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
