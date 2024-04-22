import { useState } from "react";
import CustomForm from "../CustomForm";
import TaskList from "../TaskList";
import "./styles.scss";
const MainPage = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [isChecked, setIsChecked] = useState(task.checked);

  const addTask = (item) => {
    setTasks((prevState) => [...prevState, item]);
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(!isChecked);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTask({
      name: task,
      checked: false,
      id: Date.now(),
    });
    setTask("");
  };
  console.log(tasks);

  return (
    <div className="container">
      <header>
        <h1>To-do-list</h1>
      </header>
      <CustomForm
        handleFormSubmit={handleFormSubmit}
        task={task}
        setTask={setTask}
      />
      {tasks && (
        <TaskList
          handleCheckboxChange={handleCheckboxChange}
          tasks={tasks}
          isChecked={isChecked}
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
