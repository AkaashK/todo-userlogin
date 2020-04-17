import React, { useState, useRef } from "react";
import TodoList from "./TodoList";
import History from "./history";
import "../App.css";
import { connect } from "react-redux";

function Home(props) {
  const [todolist, newTodo] = useState([]);
  const todoName = useRef();

  //To flip the values in the checkbox
  function toggleTodo(id) {
    const newTodolist = [...todolist];
    const todo = newTodolist.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    newTodo(newTodolist);
  }

  //Adding a new todo to the array of todos
  function AddTodo() {
    const name = todoName.current.value;
    if (name === "") return;
    newTodo((prevtodos) => {
      return [...prevtodos, { id: Date.now(), name: name, complete: false }];
    });
    todoName.current.value = null;
  }

  //deleting an existing todo from the array
  function deleteTodos() {
    const newTodos = todolist.filter((todo) => !todo.complete);
    newTodo(newTodos);
  }

  function logout() {
    History.push("/");
  }

  //handles select all todos in the list
  function handleSelectAllTodos() {
    const newTodolist = [...todolist];
    newTodolist.forEach((todo) => (todo.complete = true));
    newTodo(newTodolist);
  }

  return (
    <div>
      <div>
        <h2>ToDo Dashboard</h2>
        <button className="btn" type="button" onClick={logout}>
          logout
        </button>
      </div>
      <div className="App-header">
        <TodoList todolist={todolist} toggleTodo={toggleTodo} />
        <h3>Add todo...</h3>
        <input ref={todoName} type="text" />
        <br />
        <button className="btn" onClick={AddTodo}>
          Add Todo
        </button>{" "}
        <br />
        <button className="btn" onClick={deleteTodos}>
          Clear Completed Todos
        </button>
        <div>{todolist.filter((todo) => !todo.complete).length} left to do</div>
        <button className="btn" onClick={handleSelectAllTodos}>
          select all
        </button>
        <p>current user: {props.email}</p>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    email: state[state.length - 1].email,
  };
};

export default connect(mapStateToProps)(Home);
