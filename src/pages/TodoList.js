import React from "react";
import Todo from "./Todo";

export default function TodoList({ todolist, toggleTodo }) {
  return todolist.map((todo) => {
    return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />;
  });
}
