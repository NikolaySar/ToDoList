import { useState } from "react";
import AddTask from "../AddTask";
import TaskList from "../TaskList";
import "./styles.scss";

const MainPage = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({ name: "", checked: false });
  const [error, setError] = useState({ descriptionError: "" });
  const [isChecked, setIsChecked] = useState(task.checked);

  const handleCheckboxChange = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, checked: !task.checked } : task
    );
    setTasks(updatedTasks);
  };
  // const handleCheckboxChange = (id) => {
  //   const updatedTasks = tasks.map((task) =>
  //     task.id === id ? { ...task, isChecked: !task.isChecked } : task
  //   );
  //   setTasks(updatedTasks);
  //   // setIsChecked(!isChecked);
  //   console.log(tasks);
  // };

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
          id: num,
        },
      ];
    });
    console.log(tasks);
    setTask({ name: "", checked: false });
    setError({ descriptionError: "" });
  };

  const deleteTask = (id) => {
    const updateTask = tasks.filter((task) => task.id !== id);
    setTasks(updateTask);
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
          isChecked={isChecked}
          deleteTask={deleteTask}
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
