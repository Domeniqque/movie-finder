import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders movie finder", () => {
  render(<App />);
  const linkElement = screen.getByText(/movie finder/i);
  expect(linkElement).toBeInTheDocument();
});
