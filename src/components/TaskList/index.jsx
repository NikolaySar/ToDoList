import EditingTaskForm from "../EditingTaskForm";
import TaskItem from "../TaskItem";
import "./styles.scss";

const TaskList = ({
  tasks,
  handleCheckboxChange,
  isChecked,
  deleteTask,
  updatedTask,
  idUpdatedTask,
  errorEditing,
  handleEditTask,
  handleInputChange,
  checkEditingValidation,
  cancelEditing,
}) => {
  return (
    <ul className="tasks">
      {tasks.map((task) => (
        <div key={task.id} className="">
          {task.id === idUpdatedTask ? (
            <EditingTaskForm
              updatedTask={updatedTask}
              errorEditing={errorEditing}
              handleInputChange={handleInputChange}
              checkEditingValidation={checkEditingValidation}
              cancelEditing={cancelEditing}
            />
          ) : (
            <TaskItem
              // key={task.id}
              task={task}
              handleCheckboxChange={handleCheckboxChange}
              isChecked={isChecked}
              deleteTask={deleteTask}
              handleEditTask={handleEditTask}
            />
          )}
        </div>
      ))}
    </ul>
  );
};

export default TaskList;

// import React from "react";
// import TaskItem from "./TaskItem";

// class TaskList extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <ul className="tasks">
//         {this.props.tasks
//           .sort((a, b) => b.id - a.id)
//           .map((task) => (
//             <TaskItem key={task.id} task={task} />
//           ))}
//       </ul>
//     );
//   }
// }

// export default TaskList;
