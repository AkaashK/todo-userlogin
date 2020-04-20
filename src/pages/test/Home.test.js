import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Login from "../Login";
import Home from '../Home'
import "@testing-library/jest-dom/extend-expect";
import { Provider } from 'react-redux'
import store from "../store/store"

afterEach(cleanup);
describe("Home", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<Login />);
    const emailid = getByTestId("emailTest");
    const passid = getByTestId("passTest");
    const btnid = getByTestId('button')
    
    fireEvent.change(emailid, {target: { value: "hello" }});
    fireEvent.change(passid, {target: { value: "123123" }});
    fireEvent.click(btnid)
    const tree = render(<Provider store={store}><Home email="hello"/></Provider>);
    expect(tree).toMatchSnapshot()
  })

  it("should call a function on click", () => {
    const mockAddTodo = jest.fn()
    const {getByTestId} = render(<Provider store={store}><Home email="hello"/></Provider>);
    const addoTodoBtn = getByTestId('Addtodo')
    fireEvent.click(addoTodoBtn)
    expect(addoTodoBtn.textContent).toBe('Add Todo')
    expect(mockAddTodo).toHaveBeenCalled()
  })

//   it('should store data from Add Todo', () => {
//     const {getByTestId} = render(<Provider store={store}><Home email="hello"/></Provider>);
//     const addTodoValue = getByTestId('addtodotest')
//     fireEvent.change(addTodoValue, {target: {value: 'Add a todo'}})
//     const tree = render(<Provider store={store}><Home email="hello"/></Provider>);
//     expect(tree.state()[0]).toMatch('Add a todo')
//   })
});