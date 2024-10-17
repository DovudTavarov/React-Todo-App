import { Component } from "react";
import "./App.css";
import SingleTodo from "./components/SingleTodo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editId: null,
      todos: {},
    };
  }

  handleTodoDelete = (todoId) => {
    const { todos } = this.state;

    const newTodos = JSON.parse(JSON.stringify(todos));

    delete newTodos[todoId];

    this.setState({ todos: newTodos });
  };

  handleTodoComplete = (completeStatus, todoId) => {
    const { todos } = this.state;

    const newTodos = JSON.parse(JSON.stringify(todos));

    newTodos[todoId].completed = completeStatus;

    this.setState({ todos: newTodos, editId: null });
  };

  handleEditIdChange = (todoId) => {
    this.setState({ editId: todoId });
  };

  handleSaveIdChange = () => {
    this.setState({ editId: null });
  };

  handleInputChange = (inputValue, todoId) => {
    const { todos } = this.state;

    const newTodos = JSON.parse(JSON.stringify(todos));

    newTodos[todoId].text = inputValue;

    this.setState({ todos: newTodos });
  };

  handleAddTodo = () => {
    const { todos } = this.state;

    const inputElem = document.getElementById("new-todo-input");

    const newValue = inputElem.value.trim();

    const newTodos = JSON.parse(JSON.stringify(todos));

    if (newValue.length > 0) {
      const newTodo = {
        text: newValue,
        completed: false,
      };
      const newId = Math.random().toString(16).slice(2);

      newTodos[newId] = newTodo;

      this.setState({ todos: newTodos });
    }

    inputElem.value = "";
  };

  render() {
    const { todos, editId } = this.state;

    return (
      <div className="wrapper">
        <h1>Todo List App</h1>
        <div className="input-group mb-3">
          <input
            id="new-todo-input"
            type="text"
            className="form-control"
            placeholder="Add Text..."
          />
          <button
            onClick={this.handleAddTodo}
            id="add-todo"
            className="btn btn-primary"
            type="button"
          >
            Add Todo
          </button>
        </div>
        <main>
          {Object.entries(todos).map(([key, value]) => {
            const editMode = editId == key;

            return (
              <SingleTodo
                key={key}
                {...value}
                id={key}
                editMode={editMode}
                handleTodoComplete={this.handleTodoComplete}
                handleTodoDelete={this.handleTodoDelete}
                handleEditIdChange={this.handleEditIdChange}
                handleInputChange={this.handleInputChange}
                handleSaveIdChange={this.handleSaveIdChange}
              />
            );
          })}
        </main>
      </div>
    );
  }
}

export default App;
