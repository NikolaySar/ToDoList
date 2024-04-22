import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/outline";
import "./styles.scss";
const TaskItem = ({ task, handleCheckboxChange, isChecked }) => {
  return (
    <li className="todo-list">
      <div className="todo-list__group">
        <input
          type="checkbox"
          className="todo-list__checkbox"
          checked={isChecked}
          id={task.id}
          name={task.name}
          onChange={() => handleCheckboxChange()}
        />
        <label htmlFor={task.id} className="label">
          <p className="todo-list__checkmark">
            <CheckIcon strokeWidth={2} width={18} height={18} />
          </p>
          {task.name}
        </label>
      </div>
      <div className="todo-list__">
        <button className="todo-list__delete"></button>
      </div>
    </li>
  );
};

export default TaskItem;

// import React from "react";
// import { CheckIcon } from "@heroicons/react/24/outline";

// class TaskItem extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isChecked: props.task.checked,
//     };

//     this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
//   }

//   handleCheckboxChange() {
//     this.setState({ isChecked: !this.state.isChecked });
//   }

//   render() {
//     return (
//       <li className="todo-list">
//         <div className="todo-list__group">
//           <input
//             type="checkbox"
//             className="todo-list__checkbox"
//             checked={this.state.isChecked}
//             id={this.props.task.id}
//             name={this.props.task.name}
//             onChange={this.handleCheckboxChange}
//           />
//           <label htmlFor={this.props.task.id} className="label">
//             <p className="todo-list__checkmark">
//               <CheckIcon strokeWidth={2} width={18} height={18} />
//             </p>
//             {this.props.task.name}
//           </label>
//         </div>
//         <div className="todo-list__">
//           <button className="todo-list__delete"></button>
//         </div>
//       </li>
//     );
//   }
// }

// export default TaskItem;
