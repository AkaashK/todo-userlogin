import React, { useState, useRef } from "react";
import TodoList from "./TodoList";
import History from "./history";
import "../App.css";
import { connect } from "react-redux";
// import _ from 'lodash'

export function Home({ email }) {
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
    newTodo((prevtodos) => {
      return [...prevtodos, { id: Date.now(), name: name, complete: false }];
    });
    
    //for testing purpose, remove afterwards
    document.getElementById("id").innerHTML = "Added value: " + name

    todoName.current.value = null;
  }

  //deleting an existing todo from the array
  function deleteTodos() {
    const newTodos = todolist.filter((todo) => !todo.complete);
    newTodo(newTodos);
  }

  function logout() {
    History.push("/login");
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
        <p data-testid="fortest" id="id"></p>
        <h3>Add todo...</h3>
        <input data-testid="addtodotest" ref={todoName} type="text" />
        <br />
        <button data-testid="Addtodo" className="btn" onClick={AddTodo}>
          Add Todo
        </button>{" "}
        <br />
        <button
          data-testid="cleartestbtn"
          className="btn"
          onClick={deleteTodos}
        >
          Clear Completed Todos
        </button>
        <div>{todolist.filter((todo) => !todo.complete).length} left to do</div>
        <button className="btn" onClick={handleSelectAllTodos}>
          select all
        </button>
        <p>current user: {email}</p>
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
