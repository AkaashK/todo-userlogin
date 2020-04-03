import React, { useState, useRef } from 'react';
import TodoList from './TodoList'
import History from './history'
import '../App.css'

function Home() {
    const [todolist, newTodo] = useState([])
    const todoName = useRef()

    function toggleTodo(id) {
        const newTodolist = [...todolist]
        const todo = newTodolist.find(todo => todo.id === id)
        todo.complete = !todo.complete
        newTodo(newTodolist)
    }

    function AddTodo() {
        const name = todoName.current.value
        if (name === '')
            return
        newTodo(prevtodos => {
            return [...prevtodos, { id: Date.now(), name: name, complete: false }]
        })
        todoName.current.value = null
    }

    function deleteTodos() {
        const newTodos = todolist.filter(todo => !todo.complete)
        newTodo(newTodos)
    }

    function logout() {
        History.push('/')
    }

    return (
        <div>
            <div>
                <h2>ToDo Dashboard</h2> 
                <button className="btn" type="button" onClick={logout}>logout</button>
            </div>
            <div className="App-header">
                <TodoList todolist={todolist} toggleTodo={toggleTodo} />
                <h3>Add todo...</h3>
                <input ref={todoName} type="text" /><br />
                <button className="btn" onClick={AddTodo}>Add Todo</button> <br />
                <button className="btn" onClick={deleteTodos}>Clear Completed Todos</button>
                <div>{todolist.filter(todo => !todo.complete).length} left to do</div>
            </div>
        </div>
    )
}

export default Home;

