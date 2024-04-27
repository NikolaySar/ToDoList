import { Component } from "react";
import plus from "../../image/plus.svg";
import "./styles.scss";

class EditingTaskForm extends Component {
  render() {
    const {
      updatedTask,
      errorEditing,
      handleInputChange,
      checkEditingValidation,
      cancelEditing,
    } = this.props;

    return (
      <div>
        <form className="editing-task">
          <div className="editing-task__wrapper">
            <div className="editing-task__inner">
              <input
                id="task"
                type="text"
                name="name"
                className="editing-task__input"
                onChange={handleInputChange}
                value={updatedTask.name}
                required
                autoFocus
              />
              <button
                className="add-task__btn"
                onClick={checkEditingValidation}
                aria-label="Add task"
                type="submit"
              >
                <img className="add-task__img" src={plus} alt="" />
              </button>
            </div>
            {errorEditing.descriptionError && (
              <span className="">{errorEditing.descriptionError}</span>
            )}
          </div>
        </form>
      </div>
    );
  }
}

export default EditingTaskForm;
