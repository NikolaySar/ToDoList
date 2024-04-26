import React, { Component } from "react";
import AddTask from "../AddTask";
import TaskList from "../TaskList";
import "./styles.scss";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      task: { name: "", checked: false },
      error: { descriptionError: "" },
    };

    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.checkValidation = this.checkValidation.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  handleCheckboxChange(id) {
    const updatedTasks = this.state.tasks.map((task) =>
      task.id === id ? { ...task, checked: !task.checked } : task
    );
    this.setState({ tasks: updatedTasks });
  }

  handleChangeInput(key, value) {
    this.setState({ task: { ...this.state.task, [key]: value } });
  }

  checkValidation(e) {
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
  }

  addTask() {
    this.setState((prevState) => {
      const num = prevState.tasks.length + 1;
      return {
        tasks: [
          ...prevState.tasks,
          {
            ...prevState.task,
            id: num,
          },
        ],
        task: { name: "", checked: false },
        error: { descriptionError: "" },
      };
    });
  }

  deleteTask(id) {
    const updateTask = this.state.tasks.filter((task) => task.id !== id);
    this.setState({ tasks: updateTask });
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>To-do-list</h1>
        </header>
        <AddTask
          error={this.state.error}
          handleChangeInput={this.handleChangeInput}
          checkValidation={this.checkValidation}
          task={this.state.task}
        />
        {this.state.tasks && (
          <TaskList
            handleCheckboxChange={this.handleCheckboxChange}
            tasks={this.state.tasks}
            deleteTask={this.deleteTask}
          />
        )}
      </div>
    );
  }
}

export default MainPage;
