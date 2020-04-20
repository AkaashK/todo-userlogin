import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Login from "../Login";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);
describe("Login", () => {
  it("renders correctly", () => {
    const tree = render(<Login />);
    expect(tree).toMatchSnapshot();
  });

  it("shows button text", () => {
    const { getByTestId } = render(<Login />);
    expect(getByTestId("button").textContent).toBe("signup");
  });

  it("should get user value", () => {
    const { getByTestId } = render(<Login />);
    const emailid = getByTestId("emailTest");
    const passid = getByTestId("passTest");
    fireEvent.change(emailid, { value: "hello" });
    fireEvent.change(passid, { value: "123123" });
    expect(getByTestId("alertmsg").textContent).toBe("");
  });

  it('should get user alert', () => {
    const { getByTestId } = render(<Login />);
    const emailid = getByTestId("emailTest");
    const passid = getByTestId("passTest");
    const id = getByTestId("button");
    fireEvent.click(id);
    fireEvent.change(emailid, { value: "" });
    fireEvent.change(passid, { value: "" });
    expect(getByTestId("alertmsg").textContent).toBe("please enter all fields");
  })

  it('should get user alert with any one value', () => {
    const { getByTestId } = render(<Login />);
    const emailid = getByTestId("emailTest");
    const passid = getByTestId("passTest");
    const id = getByTestId("button");
    fireEvent.click(id);
    fireEvent.change(emailid, { value: "hello" });
    fireEvent.change(passid, { value: "" });
    expect(getByTestId("alertmsg").textContent).toBe("please enter all fields");
  })

  it('should call a function on click', () => {
    const mocksignup = jest.fn()
    const {getByTestId, debug} =render(<Login/>)
    const btnid = getByTestId('button')
    debug(btnid)
    fireEvent.click(btnid)
    expect(mocksignup).toBeCalled()
  })

});
