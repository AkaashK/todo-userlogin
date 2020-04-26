import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { createStore } from "redux";
import { Home } from "../Home";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import reducer from "../store/reducer";
import TodoList from "../TodoList";
import Todo from "../Todo";

const renderwithRedux = (
  component,
  { initialState, store = createStore(reducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
  };
};

const todolistComponent = (props = {}) => render(<TodoList {...props} />);

const todoComponent = (props = {}) => render(<Todo {...props} />);

afterEach(cleanup);
describe("Home", () => {
  it("renders correctly", () => {
    const tree = renderwithRedux(<Home />);
    expect(tree).toMatchSnapshot();
  });

  it("should call a function on click", () => {
    const { getByTestId } = renderwithRedux(<Home />);
    const addoTodoBtn = getByTestId("Addtodo");
    const addTodoValue = getByTestId("addtodotest");
    fireEvent.change(addTodoValue, { target: { value: "Add todo value" } });
    fireEvent.click(addoTodoBtn);
    expect(getByTestId("fortest").textContent).toBe(
      "Added value: Add todo value"
    );
    // const component = todoComponent();
    // component
    //   .findByTestId("todotest")
    //   .then((data) =>
    //     expect(data.textContent).toBe("Add todo value"))
  });

  it("should clear all todos", () => {
    const { getByTestId } = renderwithRedux(<Home />);
    const clearBtn = getByTestId("cleartestbtn");
    fireEvent.click(clearBtn);
    const component = todolistComponent();
    expect(component.container).toBeEmpty();
  });
});
