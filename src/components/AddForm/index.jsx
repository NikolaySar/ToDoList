import React from "react";
import "./styles.scss";

class AddForm extends React.Component {
  render() {
    return (
      <div className="add-form">
        <input
          value={this.props.newTask}
          onChange={this.props.handleInputChange}
          className="add-form__input"
        />
        <button
          type="button"
          onClick={this.props.addTask}
          className="add-form__btn"
        >
          Add Task
        </button>
      </div>
    );
  }
}

export default AddForm;
