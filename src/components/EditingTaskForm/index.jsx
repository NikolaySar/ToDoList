import { Component } from "react";
import cancel from "../../image/cancel.svg";
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
                className="editing-task__btn"
                onClick={checkEditingValidation}
                aria-label="Add task"
                type="button"
              >
                <img className="editing-task__img" src={plus} alt="Plus" />
              </button>
              <button
                className="editing-task__btn"
                onClick={cancelEditing}
                type="button"
              >
                <img className="editing-task__img" src={cancel} alt="Cancel" />
              </button>
            </div>
            {errorEditing.descriptionError && (
              <span className="editing-task__error">
                {errorEditing.descriptionError}
              </span>
            )}
          </div>
        </form>
      </div>
    );
  }
}

export default EditingTaskForm;
