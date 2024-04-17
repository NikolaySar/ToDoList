import { useState } from "react";
import CustomForm from "../CustomForm";
const MainPage = () => {
  const [tasks, setTasks] = useState([]);

  const [task, setTask] = useState("");
  const addTask = (item) => {
    setTasks((prevState) => [...prevState, item]);
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
    </div>
  );
};

export default MainPage;
