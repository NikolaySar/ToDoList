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

// import { useState } from "react";
// import AddForm from "../AddForm";
// import Todo from "../Todo";
// import "./styles.scss";

// const MainPage = () => {
//   const [toDo, setToDo] = useState([]);
//   const [newTask, setNewTask] = useState("");
//   const [updateTask, setUpdateTask] = useState("");

//   const markDone = (id) => {
//     const newTask = toDo.map((task) => {
//       if (task.id === id) {
//         return { ...task, status: !task.status };
//       }
//       return task;
//     });
//     setToDo(newTask);
//   };
//   const addTask = () => {
//     if (newTask) {
//       const num = toDo.length + 1;
//       const newEntry = { id: num, title: newTask, status: false };
//       setToDo([...toDo, newEntry]);
//       setNewTask("");
//     }
//   };

//   const deleteTask = (id) => {
//     setToDo(toDo.filter((item) => item.id !== id));
//   };

//   const handleInputChange = (event) => {
//     setNewTask(event.target.value);
//   };

//   // const handleUpdate = (id) => {
//   //   const newTask = toDo.map((task) => {
//   //     if (task.id === id) {
//   //       return { ...task, title: updateTask, status: false };
//   //     }
//   //     return task;
//   //   });
//   //   setToDo(newTask);
//   //   setUpdateTask("");
//   // }

//   return (
//     <div className="container">
//       <header>
//         <h1>To-do-list</h1>
//       </header>
//       <AddForm
//         newTask={newTask}
//         addTask={addTask}
//         handleInputChange={handleInputChange}
//       />
//       {toDo && toDo.length ? "" : "No Tasks..."}
//       <Todo toDo={toDo} markDone={markDone} deleteTask={deleteTask} />
//     </div>
//   );
// };

// export default MainPage;
