import React from "react";
import { Login } from "../Login";
import { createStore } from "redux";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import reducer from "../store/reducer";

const renderwithRedux = (
  component,
  { initialState, store = createStore(reducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
  };
};

afterEach(cleanup);
test("Login component renders", () => {
  const component = renderwithRedux(<Login />);
  expect(component).toMatchSnapshot();
});

test("email and password are required fields", () => {
  const { getByTestId } = renderwithRedux(<Login />);
  const emailId = getByTestId("emailtestlogin");
  const passId = getByTestId("passtestlogin");

  expect(emailId).toBeRequired();
  expect(passId).toBeRequired();
});

test("email and password are having some value", () => {
  const { getByTestId } = renderwithRedux(<Login />);
  const emailtestid = getByTestId("emailtestlogin");
  const passtestid = getByTestId("passtestlogin");
  const btnid = getByTestId("buttonlogin");
  fireEvent.change(emailtestid, { target: { value: "hello" } });
  fireEvent.change(passtestid, { target: { value: "123123" } });
  fireEvent.click(btnid);
  expect(getByTestId("alertmsglogin").textContent).toBe("please signup and continue login");
});
