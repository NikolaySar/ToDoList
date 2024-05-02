import { Component } from "react";
import drawer from "../../image/drawer.svg";
import plus from "../../image/plus.svg";
import "./styles.scss";

class AddTask extends Component {
  render() {
    const { task, checkValidation, error, handleChangeInput, deleteAllTasks } =
      this.props;

    return (
      <div>
        <form className="add-task" onSubmit={handleChangeInput}>
          <div className="add-task__wrapper">
            <div className="add-task__inner">
              <input
                id="task"
                type="text"
                className="add-task__input"
                placeholder="Create a new todo..."
                onChange={(e) => handleChangeInput("name", e.target.value)}
                value={task.name}
                required
                autoFocus
                maxLength={60}
              />
              <div className="add-task__buttons">
                <button
                  className="add-task__btn"
                  onClick={checkValidation}
                  aria-label="Add task"
                  type="submit"
                >
                  <img className="add-task__img" src={plus} alt="Plus" />
                </button>
                <button
                  className="add-task__btn"
                  onClick={deleteAllTasks}
                  type="button"
                >
                  <img className="add-task__img" src={drawer} alt="" />
                </button>
              </div>
            </div>
            {error.descriptionError && (
              <span className="add-task__error">{error.descriptionError}</span>
            )}
          </div>
        </form>
      </div>
    );
  }
}

export default AddTask;
