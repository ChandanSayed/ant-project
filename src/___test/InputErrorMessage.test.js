import { render, screen } from "@testing-library/react"
import InputErrorMessage from "../components/InputErrorMessage"

test("is InputErrorMessage screen has some text", () => {
  render(<InputErrorMessage />)
  const textOne = screen.getByText(/Fields cannot be empty!/i);
  expect(textOne).toBeInTheDocument();
});