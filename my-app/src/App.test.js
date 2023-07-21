import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event"

test('renders learn react link', () => {
  render(<App />);
  // screen.debug();
  userEvent.click(screen.getByTestId("checkbox"));
  // if not checked
  expect(screen.getByTestId("checkbox")).toBeChecked()

});
test("tesing for Hello World", () => {
  render(<App />);
  expect(screen.getByText("Hello World")).toBeInTheDocument();
});
