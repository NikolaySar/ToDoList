import { Component } from "react";
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
      errorEditing: { descriptionError: "" },
      updatedTask: {
        id: "",
        name: "",
      },
      idUpdatedTask: null,
    };
  }

  handleEditTask = (id) => {
    this.setState({ idUpdatedTask: id });
    const taskToUpdate = this.state.tasks.find((task) => task.id === id);

    if (!taskToUpdate) {
      return;
    }

    this.setState({
      updatedTask: {
        ...taskToUpdate,
      },
    });
  };

  handleInputChange = (e) => {
    this.setState({
      updatedTask: {
        ...this.state.updatedTask,
        [e.target.name]: e.target.value,
      },
    });
  };

  cancelEditing = () => {
    this.setState({
      updatedTask: {
        name: "",
      },
      idUpdatedTask: null,
      errorEditing: {
        descriptionError: "",
      },
    });
  };

  checkEditingValidation = (e) => {
    e.preventDefault();
    if (!this.state.updatedTask.name.trim()) {
      this.setState({
        errorEditing: {
          ...this.state.errorEditing,
          descriptionError: "Поле не может быть пустым!",
        },
      });
      return;
    }

    this.editTask(this.state.updatedTask);
  };

  editTask = (updatedTask) => {
    const tasksCopy = [...this.state.tasks];
    const oldTaskIndex = tasksCopy.findIndex(
      (task) => task.id === updatedTask.id
    );

    if (oldTaskIndex === -1) {
      return;
    }

    tasksCopy[oldTaskIndex] = { ...updatedTask };

    this.setState({
      tasks: tasksCopy,
      idUpdatedTask: null,
      editingError: { descriptionError: "" },
    });
  };

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
      const newTask = { ...prevState.task, id: Date.now() };
      const newTasks = [...prevState.tasks, newTask];
      const sortedTasks = this.sortTasks(newTasks);
      return {
        tasks: sortedTasks,
        task: { name: "", checked: false },
        error: { descriptionError: "" },
      };
    });
  };

  deleteTask = (id) => {
    const updateTask = this.state.tasks.filter((task) => task.id !== id);
    this.setState({ tasks: updateTask });
  };

  sortTasks = (tasks) => {
    return [...tasks].sort((a, b) => (a.checked > b.checked ? 1 : -1));
  };

  render() {
    const { tasks, task, error, errorEditing, updatedTask, idUpdatedTask } =
      this.state;
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
            tasks={this.sortTasks(tasks)}
            deleteTask={this.deleteTask}
            updatedTask={updatedTask}
            idUpdatedTask={idUpdatedTask}
            errorEditing={errorEditing}
            handleEditTask={this.handleEditTask}
            handleInputChange={this.handleInputChange}
            checkEditingValidation={this.checkEditingValidation}
            cancelEditing={this.cancelEditing}
          />
        )}
      </div>
    );
  }
}

export default MainPage;
