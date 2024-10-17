import React, { Component } from "react";

class SingleTodo extends Component {
  render() {
    const {
      text,
      completed,
      id,
      handleTodoDelete,
      handleTodoComplete,
      handleEditIdChange,
      handleInputChange,
      handleSaveIdChange,
      editMode,
    } = this.props;

    const customClass = completed ? "form-control line-thru" : "form-control";

    return (
      <div className="input-group mb-1">
        <span className="input-group-text">
          <input
            checked={completed}
            id={id}
            onChange={(e) => handleTodoComplete(e.target.checked, id)}
            type="checkbox"
          />
        </span>
        <input
          disabled={!editMode}
          onChange={(e) => handleInputChange(e.target.value, id)}
          type="text"
          className={customClass}
          value={text}
        />
        {editMode ? (
          <button
            onClick={() => handleSaveIdChange()}
            className="btn btn-success"
            type="button"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => handleEditIdChange(id)}
            className="btn btn-secondary"
            type="button"
          >
            Edit
          </button>
        )}

        <button
          onClick={() => handleTodoDelete(id)}
          className="btn btn-danger"
          type="button"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default SingleTodo;
