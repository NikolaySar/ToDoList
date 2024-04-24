import React from "react";

class AddForm extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <input
            value={this.props.newTask}
            onChange={this.props.handleInputChange}
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-auto">
          <button
            onClick={this.props.addTask}
            className="btn btn-lg btn-success"
          >
            Add Task
          </button>
        </div>
      </div>
    );
  }
}

export default AddForm;

// import React from "react";

// const AddForm = ({ newTask, addTask, handleInputChange }) => {
//   return (
//     <div className="row">
//       <div className="col">
//         <input
//           value={newTask}
//           onChange={handleInputChange}
//           className="form-control form-control-lg"
//         />
//       </div>
//       <div className="col-auto">
//         <button onClick={addTask} className="btn btn-lg btn-success">
//           Add Task
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AddForm;
