import { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
const CustomForm = ({ handleFormSubmit, task, setTask }) => {
  return (
    <div>
      <form className="todo" onSubmit={handleFormSubmit}>
        <div className="todo__wrapper">
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
          />
          <label htmlFor="task" className="todo__label"></label>
        </div>
        <button aria-label="Add task" type="submit">
          <PlusIcon className="todo__btn" />
        </button>
      </form>
    </div>
  );
};

export default CustomForm;
