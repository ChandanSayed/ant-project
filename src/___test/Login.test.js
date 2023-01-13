import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Login from "../Page/Login";
import { BrowserRouter } from "react-router-dom";

import StateContext from "../StateContext";
import DispatchContext from "../DispatchContext";
import userEvent from '@testing-library/user-event'

const initialState = {
  searchLoading: false,
  getValue: false,
  appEmail: "app@test.com",
  appPassword: "app123456",
  postJob: true,
}

describe("login screen", () => {
  beforeEach(() => {
    render(
      <StateContext.Provider value={initialState}>
        <DispatchContext.Provider value={null}>
          <BrowserRouter>
            <Login />
          </BrowserRouter>
        </DispatchContext.Provider>
      </StateContext.Provider>
    )
  })

  test("is Login screen has some text", () => {
    const textOne = screen.getByText(/Login using your Email/i);
    expect(textOne).toBeInTheDocument();
    const textTwo = screen.getByText(
      /lease enter your email and Password to login to freeboh/
    );
    expect(textTwo).toBeInTheDocument();
  });

  test("user event on on input name email", () => {
    const inputOne = screen.getByLabelText(/email/i);
    userEvent.type(inputOne, 'Hello,World!')
    expect(inputOne).toHaveValue('Hello,World!')

  });
  test("user event on on input name password", () => {
    const inputOne = screen.getByLabelText(/Password/i);
    userEvent.type(inputOne, 'qwerty123!')
    expect(inputOne).toHaveValue('qwerty123!')

  });
  test("user event on on input type radio button", () => {
    const radio = screen.getByTestId(/radio-button-one/i);
    const radioButtonTwo = screen.getByTestId(/radio-button-two/i);
    fireEvent.change(radio, { target: { value: true } });
    fireEvent.change(radioButtonTwo, { target: { value: false } });
    expect(radio).toHaveProperty("checked", true);
    expect(radioButtonTwo).toHaveProperty("checked", false);

  });
});
