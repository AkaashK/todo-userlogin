import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import SignUp from "../SignUp";
import "@testing-library/jest-dom/extend-expect";

const renderComponent = () => render(<SignUp />);

afterEach(cleanup);
describe("SignUp", () => {
  it("renders correctly", () => {
    const component = renderComponent()
    expect(component).toMatchSnapshot();
  });

  it("shows button text", () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId("button").textContent).toBe("signup");
  });

  it("should get user value", () => {
    const { getByTestId } = renderComponent();
    const emailid = getByTestId("emailTest");
    const passid = getByTestId("passTest");
    fireEvent.change(emailid, { value: "hello" });
    fireEvent.change(passid, { value: "123123" });
    expect(getByTestId("alertmsg").textContent).toBe("");
    // expect(getByTestId('emailTest').textContent).toBe('hello')
    // expect(getByTestId)
  });

  it("should get user alert", () => {
    const { getByTestId } = renderComponent();
    const emailid = getByTestId("emailTest");
    const passid = getByTestId("passTest");
    const id = getByTestId("button");
    fireEvent.click(id);
    fireEvent.change(emailid, { value: "" });
    fireEvent.change(passid, { value: "" });
    expect(getByTestId("alertmsg").textContent).toBe("please enter all fields");
  });

  it("should get user alert with any one value", () => {
    const { getByTestId } = renderComponent();
    const emailid = getByTestId("emailTest");
    const passid = getByTestId("passTest");
    const id = getByTestId("button");
    fireEvent.click(id);
    fireEvent.change(emailid, { value: "hello" });
    fireEvent.change(passid, { value: "" });
    expect(getByTestId("alertmsg").textContent).toBe("please enter all fields");
  });
});
