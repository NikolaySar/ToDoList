import React, { Component } from "react";
import AddTask from "../AddTask";
import TaskList from "../TaskList";
import "./styles.scss";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      task: { name: "", checked: false, id: Date.now() },
      error: { descriptionError: "" },
    };
  }

  handleCheckboxChange = (id) => {
    const task = this.state.tasks.find((task) => task.id === id);
    if (!task) {
      return;
    }
    task.checked = !task.checked;
    this.setState({ tasks: [...this.state.tasks] });
  };

  handleChangeInput = (key, value) => {
    this.setState({ task: { ...this.state.task, [key]: value } });
  };

  checkValidation = (e) => {
    e.preventDefault();
    if (!this.state.task.name.trim()) {
      this.setState({
        error: {
          ...this.state.error,
          descriptionError: "Поле не может быть пустым!",
        },
      });
      return;
    }
    this.addTask();
  };

  addTask = () => {
    this.setState((prevState) => {
      const num = prevState.tasks.length + 1;
      return {
        tasks: [
          ...prevState.tasks,
          {
            ...prevState.task,
            id: Date.now(),
          },
        ],
        task: { name: "", checked: false },
        error: { descriptionError: "" },
      };
    });
  };

  deleteTask = (id) => {
    const updateTask = this.state.tasks.filter((task) => task.id !== id);
    this.setState({ tasks: updateTask });
  };

  render() {
    const { tasks, task, error } = this.state;

    return (
      <div className="main-page">
        <header>
          <h1>To-do-list</h1>
        </header>
        <AddTask
          error={error}
          handleChangeInput={this.handleChangeInput}
          checkValidation={this.checkValidation}
          task={task}
        />
        {tasks && (
          <TaskList
            handleCheckboxChange={this.handleCheckboxChange}
            tasks={tasks}
            deleteTask={this.deleteTask}
          />
        )}
      </div>
    );
  }
}

export default MainPage;
