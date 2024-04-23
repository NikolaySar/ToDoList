import { useState } from "react";
import AddForm from "../AddForm";
import Todo from "../Todo";
import "./styles.scss";

const MainPage = () => {
  const [toDo, setToDo] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [updateTask, setUpdateTask] = useState("");

  const markDone = (id) => {
    const newTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(newTask);
  };
  const addTask = () => {
    if (newTask) {
      const num = toDo.length + 1;
      const newEntry = { id: num, title: newTask, status: false };
      setToDo([...toDo, newEntry]);
      setNewTask("");
    }
  };

  const deleteTask = (id) => {
    setToDo(toDo.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <header>
        <h1>To-do-list</h1>
      </header>
      <AddForm newTask={newTask} addTask={addTask} setNewTask={setNewTask} />
      {toDo && toDo.length ? "" : "No Tasks..."}
      <Todo toDo={toDo} markDone={markDone} deleteTask={deleteTask} />
    </div>
  );
};

export default MainPage;
