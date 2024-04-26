import { useState } from "react";
import AddTask from "../AddTask";
import TaskList from "../TaskList";
import "./styles.scss";

const MainPage = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({
    name: "",
    checked: false,
    id: Date.now(),
  });
  const [error, setError] = useState({ descriptionError: "" });
  //////////////////////////////////////////////////////
  const [errorEditing, setEditingError] = useState({ descriptionError: "" });
  const [updatedTask, setUpdatedTask] = useState({
    id: "",
    name: "",
    checked: task.checked,
  });
  const [idUpdatedTask, setIdUpdatedTask] = useState(null);

  const handleEditTask = (id) => {
    setIdUpdatedTask(id);
    const taskToUpdate = tasks.find((task) => task.id === id);
    if (!taskToUpdate) {
      return;
    }

    setUpdatedTask({
      ...taskToUpdate,
    });
    console.log(updatedTask);
  };

  const handleInputChange = (e) => {
    setUpdatedTask({
      ...updatedTask,
      [e.target.name]: e.target.value,
    });
  };

  const cancelEditing = () => {
    setUpdatedTask({
      name: "",
      checked: task.checked,
    });
    setIdUpdatedTask(null);
    setEditingError({
      descriptionError: "",
    });
  };

  const checkEditingValidation = (e) => {
    e.preventDefault();
    if (!updatedTask.name.trim()) {
      setEditingError({
        ...errorEditing,
        descriptionError: "Поле не может быть пустым!",
      });
      return;
    }

    editTask(updatedTask);
  };

  const editTask = (updatedTask) => {
    const tasksCopy = [...tasks];
    const oldTaskIndex = tasksCopy.findIndex(
      (task) => task.id === updatedTask.id
    );

    if (oldTaskIndex !== -1) {
      tasksCopy[oldTaskIndex] = { ...updatedTask };
    }

    setTasks(tasksCopy);
    setIdUpdatedTask(null);
    setEditingError({ descriptionError: "" });
  };

  // const editTask = (updatedTask) => {
  //   const copyCurrentTask = [...tasks];

  //   let oldTask = copyCurrentTask.find((task) => task.id === updatedTask.id);

  //   if (!oldTask) {
  //     return;
  //   }

  //   const oldTaskIndex = copyCurrentTask.findIndex(
  //     (task) => task.id === updatedTask.id
  //   );

  //   const newTask = {
  //     id: oldTask.id,
  //     name: updatedTask.name,
  //     checked: updatedTask.checked,
  //   };
  //   copyCurrentTask[oldTaskIndex] = newTask;

  //   setTask(copyCurrentTask);
  //   setIdUpdatedTask(null);
  //   setEditingError({
  //     ...errorEditing,
  //     descriptionError: "",
  //   });
  // };

  // const editTask = (updatedTask) => {
  //   const copyCurrentTask = [...tasks];

  //   let oldTask = copyCurrentTask.find((task) => task.id === updatedTask.id);

  //   if (!oldTask) {
  //     return;
  //   }

  //   const oldTaskIndex = copyCurrentTask.findIndex(
  //     (task) => task.id === updatedTask.id
  //   );

  //   const newTask = {
  //     id: oldTask.id,
  //     name: updatedTask.name,
  //     checked: updatedTask.checked,
  //   };

  //   copyCurrentTask[oldTaskIndex] = newTask;

  //   const updatedTask = [...copyCurrentTask];
  //   setTasks(updatedTask);
  //   setIdUpdatedTask(null);
  //   setEditingError({
  //     descriptionError: "",
  //   });
  // };

  const deleteAllTask = () => {
    setTasks("");
  };
  // //////////////////////////////////////////////////////////////////////////////////////////
  const handleCheckboxChange = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, checked: !task.checked } : task
    );
    setTasks(updatedTasks);
  };

  const handleChangeInput = (key, value) => {
    setTask({ ...task, [key]: value });
  };

  const checkValidation = (e) => {
    e.preventDefault();
    if (!task.name.trim()) {
      setError({ ...error, descriptionError: "Поле не может быть пустым!" });
      return;
    }
    addTask();
  };

  const addTask = () => {
    setTasks((prevState) => {
      const num = tasks.length + 1;
      return [
        ...prevState,
        {
          ...task,
          id: Date.now(),
        },
      ];
    });
    console.log(tasks);
    setTask({ name: "", checked: false });
    setError({ descriptionError: "" });
  };

  const deleteTask = (id) => {
    const updatedTask = tasks.filter((task) => task.id !== id);
    setTasks(updatedTask);
  };

  return (
    <div className="container">
      <header>
        <h1>To-do-list</h1>
      </header>
      <AddTask
        error={error}
        handleChangeInput={handleChangeInput}
        checkValidation={checkValidation}
        task={task}
      />
      {tasks && (
        <TaskList
          handleCheckboxChange={handleCheckboxChange}
          tasks={tasks}
          deleteTask={deleteTask}
          //
          updatedTask={updatedTask}
          idUpdatedTask={idUpdatedTask}
          errorEditing={errorEditing}
          handleEditTask={handleEditTask}
          handleInputChange={handleInputChange}
          checkEditingValidation={checkEditingValidation}
          cancelEditing={cancelEditing}
        />
      )}
    </div>
  );
};

export default MainPage;

// import { Component } from "react";
// import CustomForm from "../CustomForm";
// import TaskList from "../TaskList";

// class MainPage extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       tasks: [],
//       task: "",
//     };

//     this.addTask = this.addTask.bind(this);
//     this.handleFormSubmit = this.handleFormSubmit.bind(this);
//   }

//   addTask(item) {
//     this.setState((prevState) => ({
//       tasks: [...prevState.tasks, item],
//     }));
//   }

//   handleFormSubmit(e) {
//     // e.preventDefault();

//     this.addTask({
//       name: this.state.task,
//       checked: false,
//       id: Date.now(),
//     });

//     this.setState({
//       task: "",
//     });
//   }

//   render() {
//     return (
//       <div className="container">
//         <header>
//           <h1>To-do-list</h1>
//         </header>
//         <CustomForm
//           handleFormSubmit={this.handleFormSubmit}
//           task={this.state.task}
//           setTask={(task) => this.setState({ task })}
//         />
//         <TaskList tasks={this.state.tasks} />
//       </div>
//     );
//   }
// }

// export default MainPage;
