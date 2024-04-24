import React, { Component } from "react";
import AddForm from "../AddForm";
import Todo from "../Todo";
import "./styles.scss";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDo: [],
      newTask: "",
      updateTask: "",
    };
  }

  markDone = (id) => {
    const newTask = this.state.toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    this.setState({ toDo: newTask });
  };

  addTask = () => {
    if (this.state.newTask) {
      const num = this.state.toDo.length + 1;
      const newEntry = { id: num, title: this.state.newTask, status: false };
      this.setState({ toDo: [...this.state.toDo, newEntry], newTask: "" });
    }
  };

  deleteTask = (id) => {
    this.setState({ toDo: this.state.toDo.filter((item) => item.id !== id) });
  };

  handleInputChange = (event) => {
    this.setState({ newTask: event.target.value });
  };

  render() {
    return (
      <div className="container">
        <header>
          <h1>To-do-list</h1>
        </header>
        <AddForm
          newTask={this.state.newTask}
          addTask={this.addTask}
          handleInputChange={this.handleInputChange}
        />
        {this.state.toDo && this.state.toDo.length ? "" : "No Tasks..."}
        <Todo
          toDo={this.state.toDo}
          markDone={this.markDone}
          deleteTask={this.deleteTask}
        />
      </div>
    );
  }
}

export default MainPage;
