import { PlusIcon } from "@heroicons/react/24/solid";
import "./styles.scss";
const CustomForm = ({
  handleFormSubmit,
  task,
  setTask,
  checkValidation,
  error,
  handleChangeInput,
}) => {
  return (
    <div>
      <form className="todo" onSubmit={handleChangeInput}>
        <div className="todo__wrapper">
          {error.descriptionError && <p>{error.descriptionError}</p>}
          <input
            id="task"
            type="text"
            className="todo__input"
            placeholder="Create a new todo..."
            onInput={(e) => setTask(e.target.value)}
            value={task}
            required
            autoFocus
            maxLength={60}
            onChange={handleChangeInput}
          />
          <label htmlFor="task" className="todo__label"></label>
        </div>
        <button onClick={checkValidation} aria-label="Add task" type="submit">
          <PlusIcon className="todo__btn" />
        </button>
      </form>
    </div>
  );
};

export default CustomForm;

// import { PlusIcon } from "@heroicons/react/24/solid";
// import { Component } from "react";

// class CustomForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       task: props.task || "",
//     };

//     this.handleFormSubmit = this.handleFormSubmit.bind(this);
//     this.onInputChange = this.onInputChange.bind(this);
//   }

//   handleFormSubmit(event) {
//     event.preventDefault();
//     this.props.handleFormSubmit(this.state.task);
//   }

//   onInputChange(event) {
//     this.setState({ task: event.target.value });
//   }

//   render() {
//     return (
//       <div>
//         <form className="todo" onSubmit={this.handleFormSubmit}>
//           <div className="todo__wrapper">
//             <input
//               id="task"
//               type="text"
//               className="todo__input"
//               placeholder="Create a new todo..."
//               onChange={this.onInputChange}
//               value={this.state.task}
//               required
//               autoFocus
//               maxLength={60}
//             />
//             <label htmlFor="task" className="todo__label"></label>
//           </div>
//           <button aria-label="Add task" type="submit">
//             <PlusIcon className="todo__btn" />
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// export default CustomForm;
